package com.example.crud.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crud.model.Voucher;
import com.example.crud.repository.VoucherRepository;

@Service
public class VoucherService {
    @Autowired
    VoucherRepository voucherRepository;

    public ArrayList<Voucher> getVoucherList() {
        ArrayList<Voucher> vouchers = new ArrayList<>();
        voucherRepository.findAll().forEach(vouchers::add);
        return vouchers;
    }
}
