package com.example.drink.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.drink.model.Drink;

@Service
public class DrinkService {
    private ArrayList<Drink> drinks = new ArrayList<>();

    public DrinkService() {
        Drink drink1 = new Drink("TRATAC", "Trà tắc", 10000);
        Drink drink2 = new Drink("COCA", "Cocacola", 15000);
        Drink drink3 = new Drink("PEPSI", "Pepsi", 15000);
        Drink drink4 = new Drink("LAVIE", "Lavie", 5000);
        Drink drink5 = new Drink("TRASUA", "Trà sữa trân châu", 40000);
        Drink drink6 = new Drink("FANTA", "Fanta", 15000);

        drinks.addAll(Arrays.asList(drink1, drink2, drink3, drink4, drink5, drink6));
    }

    public ArrayList<Drink> getDrinks() {
        return drinks;
    }
}
