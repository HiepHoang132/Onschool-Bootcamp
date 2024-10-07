package com.example.car.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "car_code", unique = true)
    private String carCode;

    @Column(name = "car_name")
    private String carName;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<CarType> types;

    public Car() {
    }

    public Car(String carCode, String carName) {
        this.carCode = carCode;
        this.carName = carName;
        this.types = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCarCode() {
        return carCode;
    }

    public void setCarCode(String carCode) {
        this.carCode = carCode;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public List<CarType> getTypes() {
        return types;
    }

    public void setTypes(List<CarType> types) {
        this.types = types;
    }

}
