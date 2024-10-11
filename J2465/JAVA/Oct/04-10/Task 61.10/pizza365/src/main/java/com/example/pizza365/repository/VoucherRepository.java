package com.example.pizza365.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza365.model.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {

}
