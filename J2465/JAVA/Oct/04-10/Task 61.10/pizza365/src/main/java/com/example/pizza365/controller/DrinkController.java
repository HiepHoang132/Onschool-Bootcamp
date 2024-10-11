package com.example.pizza365.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizza365.model.Drink;
import com.example.pizza365.repository.DrinkRepository;

@RestController
@CrossOrigin
public class DrinkController {
    @Autowired
    DrinkRepository drinkRepository;

    @GetMapping("/drinks")
    public ResponseEntity<List<Drink>> getAllDrinks() {
        try {
            return new ResponseEntity<>(drinkRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
