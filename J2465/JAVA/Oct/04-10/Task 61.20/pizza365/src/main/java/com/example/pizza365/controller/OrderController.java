package com.example.pizza365.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizza365.model.Customer;
import com.example.pizza365.model.Order;
import com.example.pizza365.service.CustomerService;

@RestController
@CrossOrigin
@RequestMapping("/devcamp-orders")
public class OrderController {
    @Autowired
    CustomerService customerService;

    @GetMapping("")
    public ResponseEntity<List<Order>> getOrdersByCustomerId(@RequestParam long customerId) {
        try {
            Customer customer = customerService.getCustomerById(customerId);

            if (customer == null)
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

            return new ResponseEntity<>(customer.getOrders(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
