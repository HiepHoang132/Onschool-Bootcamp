package com.example.demo.controller;

import java.util.Comparator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Order;
import com.example.demo.repository.OrderRepository;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    // Tính tổng giá trị đơn hàng sử dụng parallelStream()
    @GetMapping("/total-value")
    public double getTotalOrderValue() {
        return orderRepository.findAll()
                .parallelStream()
                .mapToDouble(Order::getTotalPrice)
                .sum();
    }

    @GetMapping("/count-large-orders")
    public long countLargeOrders(@RequestParam double threshold) {
        return orderRepository.findAll()
                .parallelStream()
                .filter(order -> order.getTotalPrice() > threshold)
                .count();
    }

    @GetMapping("/highest-order")
    public Order getHighestOrder() {
        return orderRepository.findAll()
                .parallelStream()
                .max(Comparator.comparingDouble(Order::getTotalPrice))
                .orElseThrow(() -> new RuntimeException("No orders found"));
    }

    @GetMapping("/calculate-revenue")
    public double calculateRevenue() {
        double[] totalRevenue = { 0.0 };
        orderRepository.findAll()
                .parallelStream()
                .forEach(order -> totalRevenue[0] += order.getTotalPrice()); // Race condition có thể xảy ra
        return totalRevenue[0];
    }

    @GetMapping("/calculate-revenue-safe")
    public double calculateRevenueSafe() {
        double[] totalRevenue = { 0.0 };
        orderRepository.findAll()
                .parallelStream()
                .forEach(order -> {
                    synchronized (this) {
                        totalRevenue[0] += order.getTotalPrice();
                    }
                });
        return totalRevenue[0];
    }

}
