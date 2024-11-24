package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.OrderRepository;

@RestController
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders/total-completed")
    public double getTotalCompletedOrders() {
        return orderRepository.findAll()
                .stream()
                .filter(order -> order.getStatus().equals("COMPLETED") && order.getAmount() > 500)
                .mapToDouble(order -> order.getAmount())
                .reduce(0.0, Double::sum);
    }

}
