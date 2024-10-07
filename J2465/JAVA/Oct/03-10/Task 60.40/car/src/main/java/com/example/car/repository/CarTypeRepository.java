package com.example.car.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.car.model.CarType;

public interface CarTypeRepository extends JpaRepository<CarType, Integer> {

}
