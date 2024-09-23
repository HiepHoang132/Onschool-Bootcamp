package com.example.customeraccountapi.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customeraccountapi.Account;
import com.example.customeraccountapi.Customer;

@RestController
public class CustomerAccountController {

    @CrossOrigin
    @GetMapping("/accounts")
    public ArrayList<Account> getAccounts() {
        Customer customer1 = new Customer(1, "John Doe", 10);
        Customer customer2 = new Customer(2, "Jane Smith", 15);
        Customer customer3 = new Customer(3, "Alice Brown", 20);

        System.out.println(customer1);
        System.out.println(customer2);
        System.out.println(customer3);

        Account account1 = new Account(101, customer1, 1000.00);
        Account account2 = new Account(102, customer2, 1500.50);
        Account account3 = new Account(103, customer3, 2000.75);

        System.out.println(account1);
        System.out.println(account2);
        System.out.println(account3);

        ArrayList<Account> accountList = new ArrayList<>();
        accountList.add(account1);
        accountList.add(account2);
        accountList.add(account3);

        return accountList;
    }

}
