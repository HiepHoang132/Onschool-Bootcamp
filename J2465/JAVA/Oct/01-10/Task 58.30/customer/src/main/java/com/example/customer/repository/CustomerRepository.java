package com.example.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.customer.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
