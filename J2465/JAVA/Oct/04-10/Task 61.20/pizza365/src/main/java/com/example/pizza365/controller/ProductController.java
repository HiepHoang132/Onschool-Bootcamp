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

import com.example.pizza365.model.Order;
import com.example.pizza365.model.Product;
import com.example.pizza365.service.OrderService;

@RestController
@CrossOrigin
@RequestMapping("/devcamp-products")
public class ProductController {
    @Autowired
    OrderService orderService;

    @GetMapping("")
    public ResponseEntity<List<Product>> getProductsByOrderId(@RequestParam long orderId) {
        try {
            Order order = orderService.getOrderById(orderId);

            if (order == null)
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(order.getProducts(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
