package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

import com.example.demo.entity.ProductLine;
import com.example.demo.model.ExistsData;
import com.example.demo.repository.IProductLineRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/")
public class ProductLineController {
	@Autowired
	IProductLineRepository gProductLineRepository;

	@GetMapping("/product-lines")
	public ResponseEntity<List<ProductLine>> getAllProductLine() {
		try {
			List<ProductLine> vProductLines = new ArrayList<ProductLine>();
			gProductLineRepository.findAll().forEach(vProductLines::add);
			return new ResponseEntity<>(vProductLines, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/product-line/details/{id}")
	public ResponseEntity<Object> getProductLineById(@PathVariable Integer id) {
		Optional<ProductLine> vProductLineData = gProductLineRepository.findById(id);
		if (vProductLineData.isPresent()) {
			try {
				ProductLine vProductLine = vProductLineData.get();
				return new ResponseEntity<>(vProductLine, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			ProductLine vProductLineNull = new ProductLine();
			return new ResponseEntity<>(vProductLineNull, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/product-line/exists/{productLine}")
	public ResponseEntity<Object> isExistsProductLine(@PathVariable String productLine) {
		try {
			boolean vProductLine = gProductLineRepository.existsByProductLineName(productLine);
			ExistsData vExistsData = new ExistsData();
			if (vProductLine) {
				vExistsData.setName(productLine);
				vExistsData.setExists(true);
			} else {
				vExistsData.setName(productLine);
				vExistsData.setExists(false);
			}
			return new ResponseEntity<>(vExistsData, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/product-line/create")
	public ResponseEntity<Object> createProductLine(@Valid @RequestBody ProductLine paramProductLine) {

		try {
			ProductLine vProductLine = new ProductLine();
			vProductLine.setProductLineName(paramProductLine.getProductLineName());
			vProductLine.setDescription(paramProductLine.getDescription());
			ProductLine vProductLineSave = gProductLineRepository.save(vProductLine);
			return new ResponseEntity<>(vProductLineSave, HttpStatus.CREATED);
		} catch (Exception e) {
			return ResponseEntity.unprocessableEntity()
					.body("Failed to Create specified ProductLine: " + e.getCause().getCause().getMessage());
		}

	}

	@PutMapping("/product-line/update/{id}")
	public ResponseEntity<Object> updateProductLine(@PathVariable Integer id,
			@Valid @RequestBody ProductLine paramProductLine) {
		Optional<ProductLine> vProductLineData = gProductLineRepository.findById(id);
		if (vProductLineData.isPresent()) {
			try {
				ProductLine vProductLine = vProductLineData.get();
				vProductLine.setProductLineName(paramProductLine.getProductLineName());
				vProductLine.setDescription(paramProductLine.getDescription());
				ProductLine vProductLineSave = gProductLineRepository.save(vProductLine);
				return new ResponseEntity<>(vProductLineSave, HttpStatus.OK);
			} catch (Exception e) {
				return ResponseEntity.unprocessableEntity()
						.body("Failed to Update specified ProductLine: " + e.getCause().getCause().getMessage());
			}
		} else {
			ProductLine vProductLineNull = new ProductLine();
			return new ResponseEntity<>(vProductLineNull, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/product-line/delete/{id}")
	private ResponseEntity<Object> deleteProductLineById(@PathVariable Integer id) {
		Optional<ProductLine> vProductLineData = gProductLineRepository.findById(id);
		if (vProductLineData.isPresent()) {
			try {
				gProductLineRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			ProductLine vProductLineNull = new ProductLine();
			return new ResponseEntity<>(vProductLineNull, HttpStatus.NOT_FOUND);
		}
	}
}
