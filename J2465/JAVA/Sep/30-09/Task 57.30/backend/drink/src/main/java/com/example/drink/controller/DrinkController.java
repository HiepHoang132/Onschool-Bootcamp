package com.example.drink.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.drink.model.Drink;
import com.example.drink.service.DrinkService;

@RestController
@CrossOrigin
public class DrinkController {
    @Autowired
    private DrinkService drinkService;

    @GetMapping("/drinks")
    public ArrayList<Drink> getDrinks() {
        return drinkService.getDrinks();
    }

}
