package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Voucher;
import com.example.demo.repository.IVoucherRepository;

@RestController
@CrossOrigin
@RequestMapping("/")
public class VoucherController {
	@Autowired
	IVoucherRepository gVoucherRepository;

	@GetMapping("/voucher/all")
	public ResponseEntity<List<Voucher>> getVoucherAll() {
		try {
			List<Voucher> pVouchers = new ArrayList<Voucher>();
			gVoucherRepository.findAll().forEach(pVouchers::add);
			return new ResponseEntity<>(pVouchers, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/voucher/update/{maVoucher}/{phanTramGiamGia}")
	public ResponseEntity<Object> updatePhanTramGiamGiaByMaVoucher(@PathVariable String maVoucher,
			@PathVariable String phanTramGiamGia) {
		Optional<Voucher> vDataVoucher = gVoucherRepository.findByMaVoucher(maVoucher);
		if (vDataVoucher.isPresent()) {
			try {
				int vVoucher = gVoucherRepository.updatePhanTramGiamGia(maVoucher, phanTramGiamGia);
				return new ResponseEntity<>(vVoucher, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Voucher vVoucherNull = new Voucher();
			return new ResponseEntity<>(vVoucherNull, HttpStatus.NOT_FOUND);
		}

	}

}
