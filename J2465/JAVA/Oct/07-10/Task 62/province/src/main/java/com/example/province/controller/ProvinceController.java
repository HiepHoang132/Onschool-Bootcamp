package com.example.province.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.province.model.Province;
import com.example.province.service.ProvinceService;

@RestController
@CrossOrigin
public class ProvinceController {
    @Autowired
    ProvinceService provinceService;

    @GetMapping("/provinces")
    public ResponseEntity<List<Province>> getAllProvinces() {
        try {
            return new ResponseEntity<>(provinceService.getAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
