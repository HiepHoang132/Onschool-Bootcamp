package com.devcamp.pizza365.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "region")
public class CRegion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, name = "region_code")
    private String regionCode;

    @Column(name = "region_name")
    private String regionName;
    @ManyToOne
    @JsonIgnore
    private CCountry country;

    @Transient
    private String countryName;

    public String getCountryName() {
        return getCountry().getCountryName();
    }

    public void setCountryName(String countryName) {
    this.countryName = countryName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegionName() {
        return regionName;
    }

    public void setRegionName(String regionName) {
        this.regionName = regionName;
    }

    public String getRegionCode() {
        return regionCode;
    }

    public void setRegionCode(String regionCode) {
        this.regionCode = regionCode;
    }

    @JsonIgnore
    public CCountry getCountry() {
        return country;
    }

    public void setCountry(CCountry cCountry) {
        this.country = cCountry;
    }
}
