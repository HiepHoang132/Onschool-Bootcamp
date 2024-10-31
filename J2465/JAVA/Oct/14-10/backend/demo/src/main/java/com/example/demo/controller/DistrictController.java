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

import com.example.demo.DTO.DistrictDTO;
import com.example.demo.model.District;
import com.example.demo.service.DistrictService;

@RestController
@CrossOrigin
public class DistrictController {
    @Autowired
    private DistrictService districtService;

    @GetMapping("/district/all")
    public ResponseEntity<List<District>> getAllDistricts() {
        try {
            return ResponseEntity.ok(districtService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/district/details/{id}")
    public ResponseEntity<Object> getDistrictById(@PathVariable long id) {
        try {
            Optional<District> districtData = districtService.getDistrictById(id);
            if (districtData.isPresent()) {
                District district = districtData.get();
                DistrictDTO districtDTO = DistrictDTO.builder().id(id).name(district.getName())
                        .prefix(district.getPrefix())
                        .provinceId(district.getProvince() != null ? district.getProvince().getId() : 0)
                        .provinceName(district.getProvince() != null ? district.getProvince().getName() : "").build();
                return ResponseEntity.ok(districtDTO);
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed: " + e.getCause().getCause().getMessage());
        }
    }

    @PostMapping("/district/create")
    public ResponseEntity<Object> createDistrict(@RequestBody District districtDetails) {
        try {
            Optional<District> districtData = districtService.getDistrictByName(districtDetails.getName());

            if (districtData.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("District already exists");
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(districtService.save(districtDetails));
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to create district: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/district/update/{id}")
    public ResponseEntity<Object> updateDistrict(@PathVariable long id, @RequestBody District districtDetails) {
        try {
            Optional<District> districtData = districtService.getDistrictById(id);
            if (districtData.isPresent()) {
                District updateDistrict = districtData.get();
                updateDistrict.setName(districtDetails.getName());
                updateDistrict.setPrefix(districtDetails.getPrefix());
                updateDistrict.setProvince(districtDetails.getProvince());
                return ResponseEntity.ok(districtService.save(updateDistrict));
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to update district: " + e.getCause().getCause().getMessage());
        }
    }

    @DeleteMapping("/district/delete/{id}")
    public ResponseEntity<Object> deleteDistrictById(@PathVariable long id) {
        try {
            Optional<District> districtData = districtService.getDistrictById(id);
            if (districtData.isPresent()) {
                districtService.deleteById(id);
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/district/delete/all")
    public ResponseEntity<Object> deleteAllDistricts() {
        try {
            districtService.deleteAll();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
