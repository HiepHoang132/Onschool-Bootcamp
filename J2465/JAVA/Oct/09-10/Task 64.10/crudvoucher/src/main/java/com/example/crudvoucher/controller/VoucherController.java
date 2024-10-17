package com.example.crudvoucher.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.crudvoucher.model.Voucher;
import com.example.crudvoucher.service.VoucherService;

@RestController
@CrossOrigin
public class VoucherController {
    @Autowired
    private VoucherService voucherService;

    @GetMapping("/vouchers")
    public ResponseEntity<List<Voucher>> getAllVouchers() {
        try {
            return ResponseEntity.ok(voucherService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ArrayList<>());
        }
    }

    @GetMapping("/vouchers/{id}")
    public ResponseEntity<Voucher> getVoucherById(@PathVariable long id) {
        try {
            Optional<Voucher> voucherData = voucherService.getVoucherById(id);
            if (voucherData.isPresent()) {
                return ResponseEntity.ok(voucherData.get());
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/vouchers")
    public ResponseEntity<Object> createVoucher(@RequestBody Voucher voucherDetails) {
        try {
            Optional<Voucher> voucher = voucherService.getVoucherByMaVoucher(voucherDetails.getMaVoucher());
            if (voucher.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("Voucher already exists");
            }
            return new ResponseEntity<>(voucherService.saveVoucher(voucherDetails), HttpStatus.CREATED);
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to Create specified Voucher: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("vouchers/{id}")
    public ResponseEntity<Object> updateVoucher(@PathVariable long id, @RequestBody Voucher voucherDetails) {
        if (voucherService.existsById(id)) {
            Voucher updatedVoucher = voucherService.getVoucherById(id).orElseThrow();
            updatedVoucher.setMaVoucher(voucherDetails.getMaVoucher());
            updatedVoucher.setPhanTramGiamGia(voucherDetails.getPhanTramGiamGia());
            updatedVoucher.setGhiChu(voucherDetails.getGhiChu());
            updatedVoucher.setNgayCapNhat(new Date());

            try {
                return new ResponseEntity<>(voucherService.saveVoucher(updatedVoucher), HttpStatus.OK);
            } catch (Exception e) {
                return ResponseEntity.unprocessableEntity()
                        .body("Failed to Update specified Voucher:" + e.getCause().getCause().getMessage());
            }
        } else {
            return ResponseEntity.badRequest().body("Failed to get specified Voucher: " + id + "  for update.");
        }
    }

    @DeleteMapping("/vouchers/{id}")
    public ResponseEntity<Void> deleteVoucherById(@PathVariable long id) {
        try {
            boolean isDeleted = voucherService.deleteVoucherById(id);
            if (isDeleted) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/vouchers")
    public ResponseEntity<Void> deleteAllVouchers() {
        try {
            voucherService.deleteAllVouchers();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
