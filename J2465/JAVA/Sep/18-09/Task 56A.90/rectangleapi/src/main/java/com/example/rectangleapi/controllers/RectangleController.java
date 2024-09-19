package com.example.rectangleapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.rectangleapi.Rectangle;

@RestController
public class RectangleController {

    @GetMapping("/rectangle-area")
    public double getArea(@RequestParam float length, @RequestParam float width) {
        Rectangle r = new Rectangle(length, width);
        return r.getArea();
    }

    @GetMapping("/rectangle-perimeter")
    public double getPerimeter(@RequestParam float length, @RequestParam float width) {
        Rectangle r = new Rectangle(length, width);
        return r.getPerimeter();
    }

}
