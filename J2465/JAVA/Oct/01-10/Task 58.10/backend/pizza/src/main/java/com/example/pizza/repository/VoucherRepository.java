package com.example.pizza.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza.model.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {
    
}
