package com.example.validatevoucher.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.validatevoucher.model.Voucher;
import com.example.validatevoucher.repository.VoucherRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
public class VoucherController {
    @Autowired
    VoucherRepository voucherRepository;

    @PostMapping("/vouchers")
    public ResponseEntity<Voucher> createVoucher(@Valid @RequestBody Voucher voucherDetails) {
        try {
            return new ResponseEntity<>(voucherRepository.save(voucherDetails), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

}
