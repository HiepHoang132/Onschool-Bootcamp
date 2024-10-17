package com.example.crudvoucher.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crudvoucher.model.Voucher;
import com.example.crudvoucher.repository.VoucherRepository;

@Service
public class VoucherService {
    @Autowired
    private VoucherRepository voucherRepository;

    public List<Voucher> getAll() {
        return voucherRepository.findAll();
    }

    public Optional<Voucher> getVoucherById(long id) {
        return voucherRepository.findById(id);
    }

    public Optional<Voucher> getVoucherByMaVoucher(String maVoucher) {
        return voucherRepository.findByMaVoucher(maVoucher);
    }

    public boolean existsById(long id) {
        return voucherRepository.existsById(id);
    }

    public Voucher saveVoucher(Voucher voucher) {
        voucher.setNgayTao(new Date());
        voucher.setNgayCapNhat(null);
        return voucherRepository.save(voucher);
    }

    public boolean deleteVoucherById(long id) {
        if (existsById(id)) {
            voucherRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public void deleteAllVouchers() {
        voucherRepository.deleteAll();
    }
}
