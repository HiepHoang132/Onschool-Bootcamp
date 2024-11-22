package com.example.demo.controller;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Product;
import com.example.demo.entity.ProductLine;
import com.example.demo.model.ExistsData;
import com.example.demo.repository.IProductLineRepository;
import com.example.demo.repository.IProductRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	IProductRepository gProductRepository;

	@Autowired
	IProductLineRepository gProductLineRepository;

	@GetMapping("/productByProductLineAndDiscountBuyPrice")
    public List<Product> getProductByProductLineAndDiscountBuyPrice() {
        return  gProductRepository.findAll()
         .stream()
         .filter(p -> p.getProductLine().getProductLineName().equalsIgnoreCase("Trains"))
         .map(p -> p.withBuyPrice(p.getBuyPrice().multiply(BigDecimal.valueOf(0.9)))) // Sử dụng phương thức tạo đối tượng mới với giá mới
         .collect(Collectors.toList());
    }


	@GetMapping("/productByProductLineAndBuyPrice")
    public List<Product> getProductByProductLineAndBuyPrice() {
        return  gProductRepository.findAll()
         .stream()
         .filter(p -> p.getProductLine().getProductLineName().equalsIgnoreCase("Classic Cars"))
         .filter(p -> p.getBuyPrice().intValue() > 100)
         .collect(Collectors.toList());
    }


	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProduct() {
		try {
			List<Product> vProducts = new ArrayList<Product>();
			gProductRepository.findAll().forEach(vProducts::add);
			return new ResponseEntity<>(vProducts, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/product/details/{id}")
	public ResponseEntity<Object> getProductById(@PathVariable Integer id) {
		Optional<Product> vProductData = gProductRepository.findById(id);
		if (vProductData.isPresent()) {
			try {
				Product vProduct = vProductData.get();
				return new ResponseEntity<>(vProduct, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Product vProductNull = new Product();
			return new ResponseEntity<>(vProductNull, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/product/exists/{productCode}")
	public ResponseEntity<Object> isExistsProductCode(@PathVariable String productCode) {
		try {
			boolean vProductCode = gProductRepository.existsByProductCode(productCode);
			ExistsData vExistsData = new ExistsData();
			if (vProductCode) {
				vExistsData.setName(productCode);
				vExistsData.setExists(true);
			} else {
				vExistsData.setName(productCode);
				vExistsData.setExists(false);
			}
			return new ResponseEntity<>(vExistsData, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/product/create/{productLineId}")
	public ResponseEntity<Object> createProduct(@PathVariable Integer productLineId,
			@Valid @RequestBody Product paramProduct) {
		Optional<ProductLine> vProductLineData = gProductLineRepository.findById(productLineId);
		if (vProductLineData.isPresent()) {
			try {
				Product vProduct = new Product();
				vProduct.setProductCode(paramProduct.getProductCode());
				vProduct.setProductName(paramProduct.getProductName());
				vProduct.setProductDescripttion(paramProduct.getProductDescripttion());
				vProduct.setProductLine(vProductLineData.get());
				vProduct.setProductScale(paramProduct.getProductScale());
				vProduct.setProductVendor(paramProduct.getProductVendor());
				vProduct.setQuantityInStock(paramProduct.getQuantityInStock());
				vProduct.setBuyPrice(paramProduct.getBuyPrice());
				Product vProductSave = gProductRepository.save(vProduct);
				return new ResponseEntity<>(vProductSave, HttpStatus.CREATED);
			} catch (Exception e) {
				return ResponseEntity.unprocessableEntity()
						.body("Failed to Create specified Product: " + e.getCause().getCause().getMessage());
			}
		} else {
			ProductLine vProductLineNull = new ProductLine();
			return new ResponseEntity<>(vProductLineNull, HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/product/update/{id}/{productLineId}")
	public ResponseEntity<Object> updateProduct(@PathVariable Integer id, @PathVariable Integer productLineId,
			@Valid @RequestBody Product paramProduct) {
		Optional<Product> vProductData = gProductRepository.findById(id);
		if (vProductData.isPresent()) {
			Optional<ProductLine> vProductLineData = gProductLineRepository.findById(productLineId);
			if (vProductLineData.isPresent()) {
				try {
					Product vProduct = vProductData.get();
					vProduct.setProductCode(paramProduct.getProductCode());
					vProduct.setProductName(paramProduct.getProductName());
					vProduct.setProductDescripttion(paramProduct.getProductDescripttion());
					vProduct.setProductLine(vProductLineData.get());
					vProduct.setProductScale(paramProduct.getProductScale());
					vProduct.setProductVendor(paramProduct.getProductVendor());
					vProduct.setQuantityInStock(paramProduct.getQuantityInStock());
					vProduct.setBuyPrice(paramProduct.getBuyPrice());
					Product vProductSave = gProductRepository.save(vProduct);
					return new ResponseEntity<>(vProductSave, HttpStatus.OK);
				} catch (Exception e) {
					return ResponseEntity.unprocessableEntity()
							.body("Failed to Update specified Product: " + e.getCause().getCause().getMessage());
				}
			} else {
				ProductLine vProductLineNull = new ProductLine();
				return new ResponseEntity<>(vProductLineNull, HttpStatus.NOT_FOUND);
			}
		} else {
			Product vProductNull = new Product();
			return new ResponseEntity<>(vProductNull, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/product/delete/{id}")
	private ResponseEntity<Object> deleteProductById(@PathVariable Integer id) {
		Optional<Product> vProductData = gProductRepository.findById(id);
		if (vProductData.isPresent()) {
			try {
				gProductRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Product vProductNull = new Product();
			return new ResponseEntity<>(vProductNull, HttpStatus.NOT_FOUND);
		}
	}
}
