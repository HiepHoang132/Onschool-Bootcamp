package com.example.pizza.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizza.model.Voucher;
import com.example.pizza.repository.VoucherRepository;

@RestController
@CrossOrigin
public class VoucherController {
    @Autowired
    VoucherRepository voucherRepository;

    @GetMapping("/vouchers")
    public ResponseEntity<List<Voucher>> getAllVouchers() {
        try {
            return new ResponseEntity<List<Voucher>>(this.voucherRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
