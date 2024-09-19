package com.example.demo;

public class Account {
    private String name;
    private int id;
    private int balance = 0;

    public Account(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public Account(String name, int id, int balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public int getBalance() {
        return balance;
    }

    public int credit(int amount) {
        this.balance += amount;
        return balance;
    }

    public int debit(int amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            System.out.println("Amount exceeded balance");
        }

        return balance;
    }

    public int transferTo(Account another, int amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            another.balance += amount;
        } else {
            System.out.println("Amount exceeded balance");
        }
        return this.balance;
    }

    @Override
    public String toString() {
        return "Account [name=" + name + ", id=" + id + ", balance=" + balance + "]";
    }
}
