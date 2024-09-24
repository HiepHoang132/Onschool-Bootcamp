package com.example.customervisitapi.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.customervisitapi.model.Customer;
import com.example.customervisitapi.model.Visit;

@Service
public class VisitService {
    @Autowired
    private CustomerService customerService;

    private ArrayList<Visit> visits = new ArrayList<>();

    public VisitService(CustomerService _customerService) {
        this.customerService = _customerService;

        Customer customer1 = customerService.getCustomerByName("John Doe");
        Customer customer2 = customerService.getCustomerByName("Jane Smith");
        Customer customer3 = customerService.getCustomerByName("Mike Johnson");

        Visit visit1 = new Visit(customer1.getName(), new Date());
        visit1.setServiceExpense(100.0);
        visit1.setProductExpense(50.0);

        Visit visit2 = new Visit(customer2.getName(), new Date());
        visit2.setServiceExpense(200.0);
        visit2.setProductExpense(30.0);

        Visit visit3 = new Visit(customer3.getName(), new Date());
        visit3.setServiceExpense(150.0);
        visit3.setProductExpense(80.0);

        visits.addAll(Arrays.asList(visit1, visit2, visit3));
    }

    public ArrayList<Visit> getVisits() {
        return visits;
    }
}
