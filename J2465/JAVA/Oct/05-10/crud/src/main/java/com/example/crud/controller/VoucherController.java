package com.example.crud.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.model.Voucher;
import com.example.crud.repository.VoucherRepository;
import com.example.crud.service.VoucherService;

@RestController
@RequestMapping("/")
@CrossOrigin(value = "*", maxAge = -1)
public class VoucherController {
	@Autowired
	VoucherRepository pVoucherRepository;
	@Autowired
	VoucherService pVoucherService;

	// Lấy danh sách voucher dùng service.
	@GetMapping("/vouchers") // Dùng phương thức GET
	public ResponseEntity<List<Voucher>> getAllVouchersBySevice() {
		try {
			return new ResponseEntity<>(pVoucherService.getVoucherList(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	// Lấy danh sách voucher KHÔNG dùng service
	@GetMapping("/all-vouchers") // Dùng phương thức GET
	public ResponseEntity<List<Voucher>> getAllVouchers() {
		try {
			List<Voucher> vouchers = new ArrayList<Voucher>();
			pVoucherRepository.findAll().forEach(vouchers::add);
			return new ResponseEntity<>(vouchers, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	// Lấy voucher theo {id} KHÔNG dùng service
	@GetMapping("/vouchers/{id}") // Dùng phương thức GET
	public ResponseEntity<Voucher> getCVoucherById(@PathVariable("id") long id) {
		Optional<Voucher> voucherData = pVoucherRepository.findById(id);
		if (voucherData.isPresent()) {
			return new ResponseEntity<>(voucherData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	// Tạo MỚI voucher KHÔNG dùng service sử dụng phương thức POST
	@PostMapping("/vouchers") // Dùng phương thức POST
	public ResponseEntity<Object> createCVoucher(@RequestBody Voucher pVouchers) {
		try {

			Optional<Voucher> voucherData = pVoucherRepository.findById(pVouchers.getId());
			if (voucherData.isPresent()) {
				return ResponseEntity.unprocessableEntity().body(" Voucher already exsit  ");
			}
			pVouchers.setNgayTao(new Date());
			pVouchers.setNgayCapNhat(null);
			Voucher _vouchers = pVoucherRepository.save(pVouchers);
			return new ResponseEntity<>(_vouchers, HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println("+++++++++++++++++++++::::: " + e.getCause().getCause().getMessage());
			// Hiện thông báo lỗi tra back-end
			// return new ResponseEntity<>(e.getCause().getCause().getMessage(),
			// HttpStatus.INTERNAL_SERVER_ERROR);
			return ResponseEntity.unprocessableEntity()
					.body("Failed to Create specified Voucher: " + e.getCause().getCause().getMessage());
		}
	}

	// Sửa/update voucher theo {id} KHÔNG dùng service, sử dụng phương thức PUT
	@PutMapping("/vouchers/{id}") // Dùng phương thức PUT
	public ResponseEntity<Object> updateCVoucherById(@PathVariable("id") long id, @RequestBody Voucher pVouchers) {
		Optional<Voucher> voucherData = pVoucherRepository.findById(id);
		if (voucherData.isPresent()) {
			Voucher voucher = voucherData.get();
			voucher.setMaVoucher(pVouchers.getMaVoucher());
			voucher.setPhanTramGiamGia(pVouchers.getPhanTramGiamGia());
			voucher.setNgayCapNhat(new Date());
			try {
				return new ResponseEntity<>(pVoucherRepository.save(voucher), HttpStatus.OK);
			} catch (Exception e) {
				return ResponseEntity.unprocessableEntity()
						.body("Failed to Update specified Voucher:" + e.getCause().getCause().getMessage());
			}
		} else {
			return ResponseEntity.badRequest().body("Failed to get specified Voucher: " + id + "  for update.");
		}
	}

	// Xoá/delete voucher theo {id} KHÔNG dùng service, sử dụng phương thức DELETE
	@DeleteMapping("/vouchers/{id}") // Dùng phương thức DELETE
	public ResponseEntity<Voucher> deleteCVoucherById(@PathVariable("id") long id) {
		try {
			pVoucherRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	// Xoá/delete tất cả voucher KHÔNG dùng service, sử dụng phương thức DELETE
	@DeleteMapping("/vouchers") // Dùng phương thức DELETE
	public ResponseEntity<Voucher> deleteAllCVoucher() {
		try {
			pVoucherRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
