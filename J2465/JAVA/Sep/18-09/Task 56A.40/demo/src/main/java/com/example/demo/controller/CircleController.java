package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Circle;

@RestController
public class CircleController {
    @GetMapping("/circle-area")

    public double getArea(@RequestParam double radius) {
        Circle c = new Circle(radius);
        System.out.println(c);
        return c.getArea();
    }
}
