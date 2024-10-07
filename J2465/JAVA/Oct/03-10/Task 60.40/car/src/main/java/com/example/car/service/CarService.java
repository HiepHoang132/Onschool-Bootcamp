package com.example.car.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car.model.Car;
import com.example.car.repository.CarRepository;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Car getCarByCarCode(String carCode) {
        return carRepository.findByCarCode(carCode);
    }
}
