package com.example.customeraccountapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.customeraccountapi.model.Account;
import com.example.customeraccountapi.model.Customer;

@Service
public class AccountService {
    @Autowired
    private CustomerService customerService;

    private ArrayList<Account> accounts = new ArrayList<>();

    public AccountService(CustomerService _customerService) {
        this.customerService = _customerService;

        Customer customer1 = customerService.getCustomerById(1);
        Customer customer2 = customerService.getCustomerById(2);
        Customer customer3 = customerService.getCustomerById(3);

        Account account1 = new Account(101, customer1, 500.0);
        Account account2 = new Account(102, customer2, 1000.0);
        Account account3 = new Account(103, customer3, 750.0);

        accounts.addAll(Arrays.asList(account1, account2, account3));
    }

    public ArrayList<Account> getAccounts() {
        return accounts;
    }
}
