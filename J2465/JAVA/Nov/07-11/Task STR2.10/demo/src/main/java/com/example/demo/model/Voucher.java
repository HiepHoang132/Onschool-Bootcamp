package com.example.demo.model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "vouchers")
public class Voucher {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "ma_voucher", unique = true)
	private String maVoucher;

	@Column(name = "phan_tram_giam_gia")
	private String phanTramGiamGia;

	@Column(name = "ghi_chu")
	private String ghiChu;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ngay_tao", nullable = true, updatable = false)
	@CreatedDate
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date ngayTao;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ngay_cap_nhat", nullable = true)
	@LastModifiedDate
	@JsonFormat(pattern = "dd-MM-yyyy")
	private Date ngayCapNhat;

	public Voucher() {
	};

	public Voucher(String maVoucher, String phanTramGiamGia, String ghiChu, Date ngay_tao, Date ngay_cap_nhat) {
		this.maVoucher = maVoucher;
		this.phanTramGiamGia = phanTramGiamGia;
		this.ghiChu = ghiChu;
		this.ngayTao = ngay_tao;
		this.ngayCapNhat = ngay_cap_nhat;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMaVoucher() {
		return maVoucher;
	}

	public void setMaVoucher(String maVoucher) {
		this.maVoucher = maVoucher;
	}

	public String getPhanTramGiamGia() {
		return phanTramGiamGia;
	}

	public void setPhanTramGiamGia(String phanTramGiamGia) {
		this.phanTramGiamGia = phanTramGiamGia;
	}

	public String getGhiChu() {
		return ghiChu;
	}

	public void setGhiChu(String ghiChu) {
		this.ghiChu = ghiChu;
	}

	public Date getNgayTao() {
		return ngayTao;
	}

	public void setNgayTao(Date ngayTao) {
		this.ngayTao = ngayTao;
	}

	public Date getNgayCapNhat() {
		return ngayCapNhat;
	}

	public void setNgayCapNhat(Date ngayCapNhat) {
		this.ngayCapNhat = ngayCapNhat;
	}
}
