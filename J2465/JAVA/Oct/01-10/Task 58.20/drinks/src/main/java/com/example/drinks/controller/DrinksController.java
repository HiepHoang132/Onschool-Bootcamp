package com.example.drinks.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.drinks.model.Drinks;
import com.example.drinks.repository.DrinksRepository;

@RestController
@CrossOrigin
public class DrinksController {
    @Autowired
    DrinksRepository drinksRepository;

    @GetMapping("/drinks")
    public ResponseEntity<List<Drinks>> getAllDrinks() {
        try {
            return new ResponseEntity<List<Drinks>>(drinksRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
