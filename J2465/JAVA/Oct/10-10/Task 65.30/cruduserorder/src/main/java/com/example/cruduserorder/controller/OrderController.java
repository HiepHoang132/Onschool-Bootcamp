package com.example.cruduserorder.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cruduserorder.model.Order;
import com.example.cruduserorder.service.OrderService;

@RestController
@CrossOrigin
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/order/all")
    public ResponseEntity<List<Order>> getAllOrders() {
        try {
            return ResponseEntity.ok(orderService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable long id) {
        try {
            Optional<Order> orderData = orderService.getOrderById(id);

            if (orderData.isPresent()) {
                return ResponseEntity.ok(orderData.get());
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/order/create")
    public ResponseEntity<Object> createOrder(@RequestBody Order orderDetails) {
        try {
            Optional<Order> orderData = orderService.getOrderByOrderCode(orderDetails.getOrderCode());

            if (orderData.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("Order already exists");
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(orderService.saveOrder(orderDetails));
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to create specified order " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/order/update/{id}")
    public ResponseEntity<Object> updateOrder(@PathVariable long id, @RequestBody Order orderDetails) {
        try {
            Optional<Order> orderData = orderService.getOrderById(id);

            if (orderData.isPresent()) {
                Order updatedOrder = orderData.get();
                updatedOrder.setPizzaSize(orderDetails.getPizzaSize());
                updatedOrder.setPizzaType(orderDetails.getPizzaType());
                updatedOrder.setPrice(orderDetails.getPrice());
                updatedOrder.setPaid(orderDetails.getPaid());
                updatedOrder.setUpdatedAt(new Date());

                return ResponseEntity.ok(orderService.saveOrder(updatedOrder));
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to create specified order " + e.getCause().getCause().getMessage());
        }
    }

    @DeleteMapping("/order/{id}")
    public ResponseEntity<Void> deleteOrderById(@PathVariable long id) {
        try {
            Optional<Order> orderData = orderService.getOrderById(id);
            if (orderData.isPresent()) {
                orderService.deleteOrderById(id);
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/order/all")
    public ResponseEntity<Void> deleteAllOrders() {
        try {
            orderService.deleteAllOrders();
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
