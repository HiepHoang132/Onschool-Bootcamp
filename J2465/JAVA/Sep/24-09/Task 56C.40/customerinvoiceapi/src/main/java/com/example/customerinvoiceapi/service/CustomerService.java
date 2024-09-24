package com.example.customerinvoiceapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.customerinvoiceapi.model.Customer;

@Service
public class CustomerService {
    private ArrayList<Customer> customers = new ArrayList<>();

    public CustomerService() {
        Customer customer1 = new Customer(1, "John Doe", 10);
        Customer customer2 = new Customer(2, "Jane Smith", 15);
        Customer customer3 = new Customer(3, "Emily Johnson", 5);

        customers.addAll(Arrays.asList(customer1, customer2, customer3));
    }

    public ArrayList<Customer> getCustomers() {
        return customers;
    }

    public Customer getCustomerById(int id) {
        for (Customer customer : customers) {
            if (customer.getId() == id) {
                return customer;
            }
        }
        return null;
    }
}
