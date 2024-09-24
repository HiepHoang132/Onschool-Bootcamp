package com.example.customervisitapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customervisitapi.model.Customer;
import com.example.customervisitapi.service.CustomerService;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @CrossOrigin
    @GetMapping("/customers")
    public ArrayList<Customer> getCustomers() {
        return customerService.getCustomers();
    }

}
