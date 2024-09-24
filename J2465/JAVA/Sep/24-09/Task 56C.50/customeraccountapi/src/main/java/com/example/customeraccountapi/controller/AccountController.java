package com.example.customeraccountapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customeraccountapi.model.Account;
import com.example.customeraccountapi.service.AccountService;

@RestController
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/accounts")
    public ArrayList<Account> getAccounts() {
        return accountService.getAccounts();
    }

}
