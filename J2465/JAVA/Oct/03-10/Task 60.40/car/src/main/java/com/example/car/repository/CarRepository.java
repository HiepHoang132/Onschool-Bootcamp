package com.example.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car.model.Car;


public interface CarRepository extends JpaRepository<Car, Integer>{
    Car findByCarCode(String carCode);
} 
