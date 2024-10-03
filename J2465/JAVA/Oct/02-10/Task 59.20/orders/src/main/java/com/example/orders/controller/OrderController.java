package com.example.orders.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.orders.model.Order;
import com.example.orders.repository.OrderRepository;

@RestController
@CrossOrigin
public class OrderController {
    @Autowired
    OrderRepository orderRepository;

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrder() {
        try {
            return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
