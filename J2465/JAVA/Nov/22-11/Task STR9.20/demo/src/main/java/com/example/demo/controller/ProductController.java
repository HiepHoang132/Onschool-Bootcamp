package com.example.demo.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    // Tìm sản phẩm theo ID và sử dụng Optional
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);

        // Sử dụng orElseThrow để trả về lỗi nếu không tìm thấy
        return ResponseEntity
                .of(Optional.of(product.orElseThrow(() -> new ResourceNotFoundException("Product not found"))));
    }

    // Lấy danh sách sản phẩm, sử dụng Optional để xử lý dữ liệu không chắc chắn
    @GetMapping("/by-category")
    public List<Product> getProductsByCategory(@RequestParam String category) {
        return productRepository.findAll().stream()
                .filter(product -> Optional.ofNullable(product.getCategory())
                        .orElse("").equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    // Tìm sản phẩm theo tên
    @GetMapping("/find")
    public ResponseEntity<Product> getProductByName(@RequestParam String name) {
        Product product = productRepository.findByName(name)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        return ResponseEntity.ok(product);
    }

    // Danh sách sản phẩm theo danh mục (Optional + Stream)
    @GetMapping("/category")
    public List<Product> getProductsByCategoryy(@RequestParam String category) {
        return productRepository.findAll().stream()
                .filter(product -> Optional.ofNullable(product.getCategory())
                        .orElse("")
                        .equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }

    // Lấy giá sản phẩm với giá mặc định nếu không tồn tại
    @GetMapping("/price-or-default")
    public double getProductPriceOrDefault(@RequestParam Long id) {
        return productRepository.findById(id)
                .map(Product::getPrice)
                .orElse(0.0); // Giá mặc định là 0.0 nếu sản phẩm không tồn tại
    }

    // Sử dụng orElseGet() để lấy giá trị động
    @GetMapping("/price-or-supplier")
    public double getProductPriceOrSupplier(@RequestParam Long id) {
        return productRepository.findById(id)
                .map(Product::getPrice)
                .orElseGet(() -> fetchDefaultPrice());
    }

    // Hàm cung cấp giá trị mặc định
    private double fetchDefaultPrice() {
        // Giá trị mặc định từ nhà cung cấp bên ngoài
        return 50.0;
    }

    @GetMapping("/product/price-below")
    public double findProductBelowPrice(@RequestParam double price) {
        return productRepository.findAll()
                .stream()
                .filter(product -> product.getPrice() < price)
                .findFirst()
                .map(Product::getPrice)
                .orElse(99.99); // Giá mặc định nếu không tìm thấy
    }

    @GetMapping("/products/by-category-or-default")
    public List<Product> findProductsByCategoryOrDefault(@RequestParam String category) {
        List<Product> defaultProducts = List.of(
                new Product("Default Product 1", "Default", 10.0, 100),
                new Product("Default Product 2", "Default", 20.0, 200));

        return productRepository.findAll()
                .stream()
                .filter(product -> Optional.ofNullable(product.getCategory())
                        .orElse("")
                        .equalsIgnoreCase(category))
                .collect(Collectors.toList())
                .stream()
                .findAny()
                .orElse(defaultProducts);
    }

    @GetMapping("/inventory-value")
    public double calculateInventoryValue(@RequestParam String category) {
        return productRepository.findAll()
                .stream()
                .filter(product -> Optional.ofNullable(product.getCategory())
                        .orElse("")
                        .equalsIgnoreCase(category))
                .mapToDouble(product -> product.getPrice() * product.getStock())
                .sum();
    }

    @GetMapping("/highest-value-product")
    public ResponseEntity<Product> findHighestValueProduct(@RequestParam String category) {
        Optional<Product> product = productRepository.findAll()
                .stream()
                .filter(p -> Optional.ofNullable(p.getCategory()).orElse("").equalsIgnoreCase(category))
                .max(Comparator.comparingDouble(p -> p.getPrice() * p.getStock()));

        return ResponseEntity.of(product);
    }

}
