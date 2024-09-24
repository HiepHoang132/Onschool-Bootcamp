package com.example.customervisitapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.customervisitapi.model.Customer;

@Service
public class CustomerService {
    private ArrayList<Customer> customers = new ArrayList<>();

    public CustomerService() {
        Customer customer1 = new Customer("John Doe");
        customer1.setMember(true);
        customer1.setMemberType("Premium");

        Customer customer2 = new Customer("Jane Smith");
        customer2.setMember(false);

        Customer customer3 = new Customer("Mike Johnson");
        customer3.setMember(true);
        customer3.setMemberType("Gold");

        customers.addAll(Arrays.asList(customer1, customer2, customer3));
    }

    public ArrayList<Customer> getCustomers() {
        return customers;
    }

    public Customer getCustomerByName(String name) {
        for (Customer customer : customers) {
            if (customer.getName().equalsIgnoreCase(name)) {
                return customer;
            }
        }
        return null;
    }
}
