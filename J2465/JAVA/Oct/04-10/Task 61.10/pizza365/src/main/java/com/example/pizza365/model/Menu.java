package com.example.pizza365.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table
@Entity(name = "Menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "size")
    private char size;

    @Column(name = "duong_kinh")
    private String duongKinh;

    @Column(name = "suon_nuong")
    private int suonNuong;

    @Column(name = "salad")
    private int salad;

    @Column(name = "so_luong_nuoc_ngot")
    private int soLuongNuocNgot;

    @Column(name = "don_gia")
    private int donGia;

    public Menu() {

    }

    public Menu(char size, String duongKinh, int suonNuong, int salad, int soLuongNuocNgot, int donGia) {
        this.size = size;
        this.duongKinh = duongKinh;
        this.suonNuong = suonNuong;
        this.salad = salad;
        this.soLuongNuocNgot = soLuongNuocNgot;
        this.donGia = donGia;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public char getSize() {
        return size;
    }

    public void setSize(char size) {
        this.size = size;
    }

    public String getDuongKinh() {
        return duongKinh;
    }

    public void setDuongKinh(String duongKinh) {
        this.duongKinh = duongKinh;
    }

    public int getSuonNuong() {
        return suonNuong;
    }

    public void setSuonNuong(int suonNuong) {
        this.suonNuong = suonNuong;
    }

    public int getSalad() {
        return salad;
    }

    public void setSalad(int salad) {
        this.salad = salad;
    }

    public int getSoLuongNuocNgot() {
        return soLuongNuocNgot;
    }

    public void setSoLuongNuocNgot(int soLuongNuocNgot) {
        this.soLuongNuocNgot = soLuongNuocNgot;
    }

    public int getDonGia() {
        return donGia;
    }

    public void setDonGia(int donGia) {
        this.donGia = donGia;
    }

}
