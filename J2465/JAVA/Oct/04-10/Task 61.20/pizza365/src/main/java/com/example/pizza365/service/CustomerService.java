package com.example.pizza365.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pizza365.model.Customer;
import com.example.pizza365.repository.CustomerRepository;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    public Customer getCustomerById(long customerId) {
        return customerRepository.findById(customerId);
    }
}
