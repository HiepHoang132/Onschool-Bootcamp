package com.example.demo.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class SalesController {
    @GetMapping("/sales/total")
    public double getTotalSales() throws IOException {
        return Files.lines(Paths.get("sales_data.txt"))
                .parallel()
                .mapToDouble(line -> Double.parseDouble(line.split(",")[0]))
                .sum();
    }
}
