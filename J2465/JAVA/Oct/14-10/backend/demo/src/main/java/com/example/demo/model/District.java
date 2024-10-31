package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "district")
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "prefix")
    private String prefix;

    @ManyToOne
    @JsonBackReference
    private Province province;

    @OneToMany(mappedBy = "district", cascade = CascadeType.ALL)
    private List<Ward> wards = new ArrayList<>();

    @Transient
    private String provinceName;

    public String getProvinceName() {
        return this.province.getName();
    }

    public District() {
    }

    public District(String name, String prefix) {
        this.name = name;
        this.prefix = prefix;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        if (this.province != province) {
            this.province = province;

            if (province != null && !province.getDistricts().contains(this)) {
                province.getDistricts().add(this);
            }
        }
    }

    public List<Ward> getWards() {
        return wards;
    }

    public void setWards(List<Ward> wards) {
        this.wards = wards;
    }

    public void addWard(Ward ward) {
        if (!this.wards.contains(ward)) {
            this.wards.add(ward);
            ward.setDistrict(this);
        }
    }

}
