package com.example.customerorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.customerorder.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
