package com.example.animalapi.model;

public class Cat extends Mammal {

    public Cat(String name) {
        super(name);
    }

    public String getName() {
        return super.getName();
    }

    public void greets() {
        System.out.println("Meow");
    }

    @Override
    public String toString() {
        return String.format("Cat [%s]", super.toString());
    }
}
