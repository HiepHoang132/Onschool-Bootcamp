package com.example.cruduserorder.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cruduserorder.model.Order;
import com.example.cruduserorder.repository.OrderRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(long id) {
        return orderRepository.findById(id);
    }

    public Optional<Order> getOrderByOrderCode(String orderCode) {
        return orderRepository.findByOrderCode(orderCode);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrderById(long id) {
        orderRepository.deleteById(id);
    }

    public void deleteAllOrders() {
        orderRepository.deleteAll();
    }
}
