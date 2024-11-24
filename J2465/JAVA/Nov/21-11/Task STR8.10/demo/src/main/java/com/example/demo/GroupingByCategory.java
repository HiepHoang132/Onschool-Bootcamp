package com.example.demo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.example.demo.model.Product;

public class GroupingByCategory {
    public static void main(String[] args) {
        String filePath = "products.txt";

        try (Stream<String> lines = Files.lines(Paths.get(filePath))) {
            Map<String, List<Product>> groupedProducts = lines.map(line -> {
                String[] parts = line.split(",");
                return new Product(parts[0], parts[1], Double.parseDouble(parts[2]));
            })
                    .collect(Collectors.groupingBy(product -> product.category));
            groupedProducts.forEach((category, products) -> {
                System.out.println("Loại sản phẩm: " + category);
                products.forEach(System.out::println);
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
