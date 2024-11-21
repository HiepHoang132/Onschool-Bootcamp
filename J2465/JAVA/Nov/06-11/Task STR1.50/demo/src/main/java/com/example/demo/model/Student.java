package com.example.demo.model;

import java.time.LocalDate;

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
@Table(name = "student")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ho_va_ten", nullable = false, length = 100)
    private String ho_va_ten;

    @Column(name = "ma_sinh_vien", nullable = false, length = 100)
    private String ma_sinh_vien;

    @Column(name = "gioi_tinh", nullable = false, length = 10)
    private String gioi_tinh;

    @Column(name = "ngay_sinh")
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate ngay_sinh;

    @Column(name = "noi_sinh", nullable = false, length = 100)
    private String noi_sinh;

    @Column(name = "diem")
    private Long diem;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHo_va_ten() {
        return ho_va_ten;
    }

    public void setHo_va_ten(String ho_va_ten) {
        this.ho_va_ten = ho_va_ten;
    }

    public String getMa_sinh_vien() {
        return ma_sinh_vien;
    }

    public void setMa_sinh_vien(String ma_sinh_vien) {
        this.ma_sinh_vien = ma_sinh_vien;
    }

    public String getGioi_tinh() {
        return gioi_tinh;
    }

    public void setGioi_tinh(String gioi_tinh) {
        this.gioi_tinh = gioi_tinh;
    }

    public LocalDate getNgay_sinh() {
        return ngay_sinh;
    }

    public void setNgay_sinh(LocalDate ngay_sinh) {
        this.ngay_sinh = ngay_sinh;
    }

    public String getNoi_sinh() {
        return noi_sinh;
    }

    public void setNoi_sinh(String noi_sinh) {
        this.noi_sinh = noi_sinh;
    }

    public Long getDiem() {
        return diem;
    }

    public void setDiem(Long diem) {
        this.diem = diem;
    }

    @Override
    public String toString() {
        return "Student [id=" + id + ", ho_va_ten=" + ho_va_ten + ", ma_sinh_vien=" + ma_sinh_vien + ", gioi_tinh="
                + gioi_tinh + ", ngay_sinh=" + ngay_sinh + ", noi_sinh=" + noi_sinh + ", diem=" + diem + "]";
    }

}
