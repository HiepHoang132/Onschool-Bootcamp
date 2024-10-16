package com.example.province.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.province.model.District;
import com.example.province.model.Ward;
import com.example.province.repository.DistrictRepository;

@RestController
@CrossOrigin
public class WardController {
    @Autowired
    DistrictRepository districtRepository;

    @GetMapping("/wards")
    public ResponseEntity<List<Ward>> getWardsByDistrictId(@RequestParam long districtId) {
        try {
            District district = districtRepository.findById(districtId);

            if (district == null) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(district.getWards(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

}
