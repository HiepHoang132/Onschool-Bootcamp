package com.example.car.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car.model.CarType;
import com.example.car.repository.CarTypeRepository;

@Service
public class CarTypeService {
    @Autowired
    CarTypeRepository carTypeRepository;

    public List<CarType> getAllCarTypes() {
        return carTypeRepository.findAll();
    }
}
