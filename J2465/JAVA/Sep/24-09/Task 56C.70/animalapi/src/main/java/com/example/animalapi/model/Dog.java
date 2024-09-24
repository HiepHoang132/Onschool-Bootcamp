package com.example.animalapi.model;

public class Dog extends Mammal {
    public Dog(String name) {
        super(name);
    }

    public String getName() {
        return super.getName();
    }

    public void greets() {
        System.out.println("Woof");
    }

    public void greets(Dog another) {
        System.out.println("Woooof");
    }

    @Override
    public String toString() {
        return String.format("Dog [%s]", super.toString());
    }

}
