package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Province;
import com.example.demo.service.ProvinceService;

@RestController
@CrossOrigin
public class ProvinceController {
    @Autowired
    private ProvinceService provinceService;

    @GetMapping("/province/all")
    public ResponseEntity<List<Province>> getAllProvinces() {
        try {
            return ResponseEntity.ok(provinceService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/province/details/{id}")
    public ResponseEntity<Province> getProvinceById(@PathVariable long id) {
        try {
            Optional<Province> provinceData = provinceService.getProvinceById(id);
            if (provinceData.isPresent()) {
                return ResponseEntity.ok(provinceData.get());
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/province/create")
    public ResponseEntity<Object> createProvince(@RequestBody Province provinceDetails) {
        try {
            Optional<Province> provinceData = provinceService.getProvinceByCode(provinceDetails.getCode());

            if (provinceData.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("Province already exists");
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(provinceService.save(provinceDetails));
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to create province: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/province/update/{id}")
    public ResponseEntity<Object> updateProvince(@PathVariable long id, @RequestBody Province provinceDetails) {
        try {
            Optional<Province> provinceData = provinceService.getProvinceById(id);
            if (provinceData.isPresent()) {
                Province updatedProvince = provinceData.get();
                updatedProvince.setCode(provinceDetails.getCode());
                updatedProvince.setName(provinceDetails.getName());
                return ResponseEntity.ok(provinceService.save(updatedProvince));
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to update province: " + e.getCause().getCause().getMessage());
        }
    }

    @DeleteMapping("/province/delete/{id}")
    public ResponseEntity<Object> deleteProvinceById(@PathVariable long id) {
        try {
            Optional<Province> provinceData = provinceService.getProvinceById(id);
            if (provinceData.isPresent()) {
                provinceService.deleteById(id);
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/province/delete/all")
    public ResponseEntity<Object> deleteAllProvinces() {
        try {
            provinceService.deleteAll();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
