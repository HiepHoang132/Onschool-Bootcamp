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
import com.example.province.model.Province;
import com.example.province.service.ProvinceService;

@RestController
@CrossOrigin
public class DistrictController {
    @Autowired
    ProvinceService provinceService;

    @GetMapping("/districts")
    public ResponseEntity<List<District>> getDistrictsByProvinceId(@RequestParam long provinceId) {
        try {
            Province province = provinceService.getProvinceById(provinceId);

            if (province == null) {
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            }

            return new ResponseEntity<>(province.getDistricts(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

}
