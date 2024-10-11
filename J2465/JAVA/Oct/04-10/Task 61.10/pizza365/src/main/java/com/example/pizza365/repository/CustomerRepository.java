package com.example.pizza365.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza365.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{
    
}
