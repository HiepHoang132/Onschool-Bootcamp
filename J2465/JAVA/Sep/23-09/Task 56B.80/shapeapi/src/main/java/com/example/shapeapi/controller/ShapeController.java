package com.example.shapeapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.shapeapi.Circle;
import com.example.shapeapi.Rectangle;
import com.example.shapeapi.Square;

@RestController
public class ShapeController {

    @CrossOrigin
    @GetMapping("/circle-area")
    public double getCircleArea(@RequestParam double radius) {
        Circle circle = new Circle(radius);
        return circle.getArea();
    }

    @GetMapping("/circle-perimeter")
    public double getCirclePerimeter(@RequestParam double radius) {
        Circle circle = new Circle(radius);
        return circle.getPerimeter();
    }

    @GetMapping("/rectangle-area")
    public double getRectangleArea(@RequestParam double width, @RequestParam double length) {
        Rectangle rectangle = new Rectangle(width, length);
        return rectangle.getArea();
    }

    @GetMapping("/rectangle-perimeter")
    public double getRectanglePerimeter(@RequestParam double width, @RequestParam double length) {
        Rectangle rectangle = new Rectangle(width, length);
        return rectangle.getPerimeter();
    }

    @GetMapping("/square-area")
    public double getSquareArea(@RequestParam double side) {
        Square square = new Square(side);
        return square.getArea();
    }

    @GetMapping("/square-perimeter")
    public double getSquarePerimeter(@RequestParam double side) {
        Square square = new Square(side);
        return square.getPerimeter();
    }

}
