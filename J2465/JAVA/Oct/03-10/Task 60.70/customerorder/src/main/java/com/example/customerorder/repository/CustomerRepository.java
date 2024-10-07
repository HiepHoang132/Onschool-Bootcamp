package com.example.customerorder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.customerorder.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findById(long id);
}
