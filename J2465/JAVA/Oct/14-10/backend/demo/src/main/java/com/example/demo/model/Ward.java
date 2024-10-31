package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "ward")
public class Ward {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "prefix")
    private String prefix;

    @ManyToOne
    @JsonBackReference
    private District district;

    @Transient
    private String districtName;

    @Transient
    private long districtId;

    public String getDistrictName() {
        return this.district.getName();
    }

    public Long getDistrictId() {
        return this.district.getId();
    }

    public Ward() {
    }

    public Ward(String name, String prefix) {
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

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        if (this.district != district) {
            this.district = district;
            if (district != null && !district.getWards().contains(this)) {
                district.getWards().add(this);
            }
        }
    }

}
