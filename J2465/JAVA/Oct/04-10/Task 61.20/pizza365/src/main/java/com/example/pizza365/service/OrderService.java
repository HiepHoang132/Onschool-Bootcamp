package com.example.pizza365.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pizza365.model.Order;
import com.example.pizza365.repository.OrderRepository;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public Order getOrderById(long orderId) {
        return orderRepository.findById(orderId);
    }
}
