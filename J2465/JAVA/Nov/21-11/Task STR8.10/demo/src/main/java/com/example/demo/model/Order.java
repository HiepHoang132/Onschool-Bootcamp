package com.example.demo.model;

public class Order {
    public String id;
    public int quantity;
    public double price;
    public boolean isPaid;

    public Order(String id, int quantity, double price, boolean isPaid) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.isPaid = isPaid;
    }

    public double getTotalPrice() {
        return quantity * price;
    }

    public boolean isPaid() {
        return isPaid;
    }
}
