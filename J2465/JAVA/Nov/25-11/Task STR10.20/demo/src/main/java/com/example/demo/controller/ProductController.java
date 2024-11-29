package com.example.demo.controller;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products/pipeline")
    public List<Product> getProductsPipeline(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String sortBy,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Comparator<Product> comparator = Comparator.comparing(Product::getId);

        if ("price".equalsIgnoreCase(sortBy)) {
            comparator = Comparator.comparing(Product::getPrice);
        } else if ("stock".equalsIgnoreCase(sortBy)) {
            comparator = Comparator.comparing(Product::getStock);
        }

        return productRepository.findAll()
                .stream()
                .filter(p -> p.getCategory().equalsIgnoreCase(category))
                .sorted(comparator)
                .skip(page * size)
                .limit(size)
                .collect(Collectors.toList());
    }
}
