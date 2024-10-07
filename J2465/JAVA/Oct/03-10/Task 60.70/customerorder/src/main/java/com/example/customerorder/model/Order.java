package com.example.customerorder.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "order_code")
    private String orderCode;

    @Column(name = "pizza_size")
    private String pizzaSize;

    @Column(name = "pizza_type")
    private String pizzaType;

    @Column(name = "voucher_code")
    private String voucherCode;

    @Column(name = "price")
    private long price;

    @Column(name = "paid")
    private long paid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "customer_id")
    private Customer customer;

    public Order() {

    }

    public Order(String orderCode, String pizzaSize, String pizzaType, String voucherCode, long price, long paid) {
        this.orderCode = orderCode;
        this.pizzaSize = pizzaSize;
        this.pizzaType = pizzaType;
        this.voucherCode = voucherCode;
        this.price = price;
        this.paid = paid;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public String getPizzaSize() {
        return pizzaSize;
    }

    public void setPizzaSize(String pizzaSize) {
        this.pizzaSize = pizzaSize;
    }

    public String getPizzaType() {
        return pizzaType;
    }

    public void setPizzaType(String pizzaType) {
        this.pizzaType = pizzaType;
    }

    public String getVoucherCode() {
        return voucherCode;
    }

    public void setVoucherCode(String voucherCode) {
        this.voucherCode = voucherCode;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getPaid() {
        return paid;
    }

    public void setPaid(long paid) {
        this.paid = paid;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

}
