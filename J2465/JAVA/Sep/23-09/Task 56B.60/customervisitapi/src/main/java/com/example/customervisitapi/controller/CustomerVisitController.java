package com.example.customervisitapi.controller;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customervisitapi.Customer;
import com.example.customervisitapi.Visit;

@RestController
public class CustomerVisitController {

    @GetMapping("/visits")
    public ArrayList<Visit> getVisits() {
        Customer customer1 = new Customer("John Doe");
        customer1.setMember(true);
        customer1.setMemberType("Gold");

        Customer customer2 = new Customer("Jane Smith");
        customer2.setMember(true);
        customer2.setMemberType("Silver");

        Customer customer3 = new Customer("Alice Johnson");
        customer3.setMember(false);

        System.out.println(customer1);
        System.out.println(customer2);
        System.out.println(customer3);

        Visit visit1 = new Visit(customer1.getName(), new Date());
        visit1.setServiceExpense(200.0);
        visit1.setProductExpense(50.0);

        Visit visit2 = new Visit(customer2.getName(), new Date());
        visit2.setServiceExpense(150.0);
        visit2.setProductExpense(30.0);

        Visit visit3 = new Visit(customer3.getName(), new Date());
        visit3.setServiceExpense(100.0);
        visit3.setProductExpense(20.0);

        System.out.println(visit1);
        System.out.println(visit2);
        System.out.println(visit3);

        ArrayList<Visit> visitList = new ArrayList<>();
        visitList.add(visit1);
        visitList.add(visit2);
        visitList.add(visit3);

        return visitList;
    }

}
