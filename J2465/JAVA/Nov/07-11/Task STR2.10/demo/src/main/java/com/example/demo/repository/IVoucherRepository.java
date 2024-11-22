package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Voucher;

import jakarta.transaction.Transactional;

public interface IVoucherRepository extends JpaRepository<Voucher, Long> {

	Optional<Voucher> findByMaVoucher(String maVoucher);

	@Transactional
	@Modifying
	@Query(value = "UPDATE vouchers SET phan_tram_giam_gia = :phanTramGiamGia  WHERE ma_voucher = :maVoucher", nativeQuery = true)
	int updatePhanTramGiamGia(@Param("maVoucher") String maVoucher, @Param("phanTramGiamGia") String phanTramGiamGia);
}
