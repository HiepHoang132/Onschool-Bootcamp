package com.example.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.model.Car;
import com.example.car.model.CarType;
import com.example.car.repository.CarTypeRepository;
import com.example.car.service.CarService;

@RestController
@CrossOrigin
@RequestMapping("/devcamp")
public class CarController {
    @Autowired
    CarService carService;

    @Autowired
    CarTypeRepository carTypeRepository;

    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getAllCars() {
        try {
            return new ResponseEntity<>(carService.getAllCars(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/cartypes")
    public ResponseEntity<List<CarType>> getAllCarTypes(@RequestParam String carCode) {
        try {
            Car car = carService.getCarByCarCode(carCode);

            if (car == null)
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);

            return new ResponseEntity<>(car.getTypes(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
