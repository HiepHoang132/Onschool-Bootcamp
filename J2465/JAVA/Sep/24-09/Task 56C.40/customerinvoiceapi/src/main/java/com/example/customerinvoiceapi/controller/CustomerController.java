package com.example.customerinvoiceapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customerinvoiceapi.model.Customer;
import com.example.customerinvoiceapi.service.CustomerService;


@RestController
public class CustomerController {
    
    @Autowired
    private CustomerService customerService;

    @GetMapping("/customers")
    public ArrayList<Customer> getCustomers() {
        return customerService.getCustomers();
    }
    
}
