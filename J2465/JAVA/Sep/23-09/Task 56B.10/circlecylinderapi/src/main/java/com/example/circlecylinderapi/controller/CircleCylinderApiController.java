package com.example.circlecylinderapi.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.circlecylinderapi.Circle;
import com.example.circlecylinderapi.Cylinder;

@RestController
public class circlecylinderapicontroller {

    @CrossOrigin
    @GetMapping("/circle-area")
    public double getArea(@RequestParam double radius) {
        Circle circle = new Circle(radius);
        return circle.getArea();
    }

    @CrossOrigin
    @GetMapping("/cylinder-volume")
    public double getVolume(@RequestParam double radius, @RequestParam double height) {
        Cylinder cylinder = new Cylinder(radius, height);
        return cylinder.getVolume();
    }
}
