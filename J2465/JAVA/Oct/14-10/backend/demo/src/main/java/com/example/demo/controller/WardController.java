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

import com.example.demo.model.Ward;
import com.example.demo.service.WardService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
public class WardController {
    @Autowired
    private WardService wardService;

    @GetMapping("/ward/all")
    public ResponseEntity<List<Ward>> getAllWards() {
        try {
            return ResponseEntity.ok(wardService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/ward/details/{id}")
    public ResponseEntity<Ward> getWardById(@PathVariable long id) {
        try {
            Optional<Ward> wardData = wardService.getWardById(id);
            if (wardData.isPresent()) {
                return ResponseEntity.ok(wardData.get());
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/ward/create")
    public ResponseEntity<Object> createWard(@Valid @RequestBody Ward wardDetails) {
        try {
            Optional<Ward> wardData = wardService.getWardByName(wardDetails.getName());

            if (wardData.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("Ward already exists");
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(wardService.save(wardDetails));
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to create ward: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/ward/update/{id}")
    public ResponseEntity<Object> updateWard(@PathVariable long id, @RequestBody Ward wardDetails) {
        try {
            Optional<Ward> wardData = wardService.getWardById(id);
            if (wardData.isPresent()) {
                Ward updateWard = wardData.get();
                updateWard.setName(wardDetails.getName());
                updateWard.setPrefix(wardDetails.getPrefix());
                updateWard.setDistrict(wardDetails.getDistrict());
                return ResponseEntity.ok(wardService.save(updateWard));
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to update ward: " + e.getCause().getCause().getMessage());
        }
    }

    @DeleteMapping("/ward/delete/{id}")
    public ResponseEntity<Object> deleteWardById(@PathVariable long id) {
        try {
            Optional<Ward> wardData = wardService.getWardById(id);
            if (wardData.isPresent()) {
                wardService.deleteById(id);
                return ResponseEntity.noContent().build();
            }

            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/ward/delete/all")
    public ResponseEntity<Object> deleteAllWards() {
        try {
            wardService.deleteAll();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
