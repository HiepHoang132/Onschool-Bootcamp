package com.example.animalapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.animalapi.model.Cat;
import com.example.animalapi.model.Dog;
import com.example.animalapi.service.AnimalService;

@RestController
public class AnimalController {
    @Autowired
    private AnimalService animalService;

    @CrossOrigin
    @GetMapping("/cats")
    public ArrayList<Cat> getCats() {
        return animalService.getCats();
    }

    @GetMapping("/dogs")
    public ArrayList<Dog> getDogs() {
        return animalService.getDogs();
    }
}
