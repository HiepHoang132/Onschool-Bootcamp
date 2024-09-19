package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Account;

@RestController
public class AccountController {
    
    @GetMapping("/accounts")
    public ArrayList<Account> getAccounts() {
        Account account1 = new Account("Alice", 101, 5000);
        Account account2 = new Account("Bob", 102, 3000);
        Account account3 = new Account("Charlie", 103, 7000);

        System.out.println(account1);
        System.out.println(account2);
        System.out.println(account3);

        ArrayList<Account> accounts = new ArrayList<>();
        accounts.add(account1);
        accounts.add(account2);
        accounts.add(account3);

        return accounts;
    }
}
