package com.example.validatevoucher.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.validatevoucher.model.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Long> {

}
