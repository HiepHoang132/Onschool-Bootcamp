package com.example.demo;

import java.util.Arrays;
import java.util.List;

import com.example.demo.model.Order;

public class OrderTotal {
    public static void main(String[] args) {
        List<Order> orders = Arrays.asList(
                new Order("ORD001", 2, 50.0, true),
                new Order("ORD002", 1, 100.0, false),
                new Order("ORD003", 5, 20.0, true),
                new Order("ORD004", 3, 150.0, false),
                new Order("ORD005", 4, 30.0, true));
        // Tính tổng giá trị các đơn hàng đã thanh toán
        double totalPaid = orders.stream()
                .filter(order -> order.isPaid())
                .mapToDouble(order -> order.getTotalPrice())
                .sum();
        System.out.println("Tổng giá trị các đơn hàng đã thanh toán: " + totalPaid);

    }
}
