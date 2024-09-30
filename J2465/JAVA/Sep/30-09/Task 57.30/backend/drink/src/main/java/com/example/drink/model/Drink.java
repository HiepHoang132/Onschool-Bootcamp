package com.example.drink.model;

public class Drink {
    private String maNuocUong;
    private String tenNuocUong;
    private int donGia;
    private String ghiChu = null;
    private long ngayTao = 1615177934000l;
    private long ngayCapNhat = 1615177934000l;

    public Drink(String maNuocUong, String tenNuocUong, int donGia) {
        this.maNuocUong = maNuocUong;
        this.tenNuocUong = tenNuocUong;
        this.donGia = donGia;
    }

    public String getMaNuocUong() {
        return maNuocUong;
    }

    public void setMaNuocUong(String maNuocUong) {
        this.maNuocUong = maNuocUong;
    }

    public String getTenNuocUong() {
        return tenNuocUong;
    }

    public void setTenNuocUong(String tenNuocUong) {
        this.tenNuocUong = tenNuocUong;
    }

    public int getDonGia() {
        return donGia;
    }

    public void setDonGia(int donGia) {
        this.donGia = donGia;
    }

    public String getGhiChu() {
        return ghiChu;
    }

    public void setGhiChu(String ghiChu) {
        this.ghiChu = ghiChu;
    }

    public long getNgayTao() {
        return ngayTao;
    }

    public void setNgayTao(long ngayTao) {
        this.ngayTao = ngayTao;
    }

    public long getNgayCapNhat() {
        return ngayCapNhat;
    }

    public void setNgayCapNhat(long ngayCapNhat) {
        this.ngayCapNhat = ngayCapNhat;
    }

    @Override
    public String toString() {
        return "Drink [maNuocUong=" + maNuocUong + ", tenNuocUong=" + tenNuocUong + ", donGia=" + donGia + ", ghiChu="
                + ghiChu + ", ngayTao=" + ngayTao + ", ngayCapNhat=" + ngayCapNhat + "]";
    }

}
