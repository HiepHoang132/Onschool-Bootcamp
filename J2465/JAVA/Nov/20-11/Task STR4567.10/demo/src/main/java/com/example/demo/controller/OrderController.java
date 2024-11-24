package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;

@RestController
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/total-amount")
    public double getTotalOrderAmount() {
        return orderRepository.findAll()
                .stream()
                .map(o -> o.getAmount())
                .reduce(0.0, Double::sum);
    }

    @GetMapping("/partition-by-amount")
    public Map<Boolean, List<Order>> partitionOrdersByAmount() {
        return orderRepository.findAll()
                .stream()
                .collect(Collectors.partitioningBy(order -> order.getAmount() > 500));
    }

    @GetMapping("/group-by-customer")
    public Map<String, List<Order>> getOrdersGroupedByCustomer() {
        return orderRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(Order::getCustomerName));
    }

    @GetMapping("/parallel-total-amount")
    public double getTotalOrderAmountParallel() {
        return orderRepository.findAll()
                .parallelStream()
                .mapToDouble(Order::getAmount)
                .sum();
    }
}
