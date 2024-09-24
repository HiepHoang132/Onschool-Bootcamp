package com.example.animalapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.animalapi.model.Animal;
import com.example.animalapi.model.Cat;
import com.example.animalapi.model.Dog;

@Service
public class AnimalService {
    private ArrayList<Animal> animals = new ArrayList<>();

    public AnimalService() {
        Cat cat1 = new Cat("Whiskers");
        Cat cat2 = new Cat("Mittens");

        Dog dog1 = new Dog("Rex");
        Dog dog2 = new Dog("Buddy");

        animals.addAll(Arrays.asList(cat1, cat2, dog1, dog2));
    }

    public ArrayList<Cat> getCats() {
        ArrayList<Cat> cats = new ArrayList<>();

        for (Animal animal : animals) {
            if (animal instanceof Cat cat) {
                cats.add(cat);
            }
        }

        return cats;
    }

    public ArrayList<Dog> getDogs() {
        ArrayList<Dog> dogs = new ArrayList<>();

        for (Animal animal : animals) {
            if (animal instanceof Dog dog) {
                dogs.add(dog);
            }
        }

        return dogs;
    }
}
