package com.example.pizza365.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza365.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
    
}
