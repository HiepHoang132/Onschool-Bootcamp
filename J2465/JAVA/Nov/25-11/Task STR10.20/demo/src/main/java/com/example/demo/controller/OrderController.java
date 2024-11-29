package com.example.demo.controller;

import java.util.Comparator;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/async")
    public CompletableFuture<List<Order>> getHighValueOrdersAsync() {
        return CompletableFuture.supplyAsync(() -> orderRepository.findAll()
                .parallelStream()
                .filter(order -> order.getTotal_price() > 1000)
                .sorted(Comparator.comparingDouble(Order::getTotal_price).reversed())
                .collect(Collectors.toList()));
    }

}
