package com.example.cruduserorder.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cruduserorder.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Optional<Order> findById(long id);

    Optional<Order> findByOrderCode(String orderCode);
}
