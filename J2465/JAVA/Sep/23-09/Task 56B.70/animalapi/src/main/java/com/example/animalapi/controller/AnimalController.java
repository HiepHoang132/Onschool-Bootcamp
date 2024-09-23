package com.example.animalapi.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.animalapi.Cat;
import com.example.animalapi.Dog;

@RestController
public class AnimalController {

    @CrossOrigin
    @GetMapping("/cats")
    public ArrayList<Cat> getCats() {
        ArrayList<Cat> cats = new ArrayList<>();

        Cat cat1 = new Cat("Whiskers");
        Cat cat2 = new Cat("Mittens");
        Cat cat3 = new Cat("Shadow");

        System.out.println(cat1);
        System.out.println(cat2);
        System.out.println(cat3);

        cats.add(cat1);
        cats.add(cat2);
        cats.add(cat3);

        return cats;
    }

    @GetMapping("/dogs")
    public ArrayList<Dog> getDogs() {
        ArrayList<Dog> dogs = new ArrayList<>();

        Dog dog1 = new Dog("Buddy");
        Dog dog2 = new Dog("Max");
        Dog dog3 = new Dog("Rex");

        System.out.println(dog1);
        System.out.println(dog2);
        System.out.println(dog3);
        
        dogs.add(dog1);
        dogs.add(dog2);
        dogs.add(dog3);

        return dogs;
    }

}
