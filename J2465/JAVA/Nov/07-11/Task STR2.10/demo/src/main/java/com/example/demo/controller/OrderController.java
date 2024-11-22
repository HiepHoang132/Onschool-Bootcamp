package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Order;
import com.example.demo.repository.IOrderRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private IOrderRepository orderRepo;
    
    // Lấy ra danh sách đơn hàng có sản phẩm (Products) thuộc Productline là "Ships"
    @GetMapping("/orderByProductLine")
    public List<Order> getOrderByProductLine() {
        return
        orderRepo.findAll()
        .stream()
        .filter(o -> o.getOrderDetail()
          .stream()
          .anyMatch(p -> p.getProduct().getProductLine().getProductLineName().equalsIgnoreCase("Ships"))
        )
        .collect(Collectors.toList());
    }

}
