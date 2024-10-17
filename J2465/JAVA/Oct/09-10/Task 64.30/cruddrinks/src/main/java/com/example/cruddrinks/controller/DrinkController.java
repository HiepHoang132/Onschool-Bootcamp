package com.example.cruddrinks.controller;

import java.util.Date;
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

import com.example.cruddrinks.model.Drink;
import com.example.cruddrinks.service.DrinkService;

@RestController
@CrossOrigin
public class DrinkController {
    @Autowired
    private DrinkService drinkService;

    @GetMapping("/drinks")
    public ResponseEntity<List<Drink>> getAllDrinks() {
        try {
            return ResponseEntity.ok(drinkService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/drinks/{id}")
    public ResponseEntity<Drink> getDrinkById(@PathVariable long id) {
        try {
            Optional<Drink> drinkData = drinkService.getDrinkById(id);
            if (drinkData.isPresent()) {
                return ResponseEntity.ok(drinkData.get());
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/drinks")
    public ResponseEntity<Object> createDrink(@RequestBody Drink drinkDetails) {
        try {
            Optional<Drink> existingDrink = drinkService.getDrinkByMaNuocUong(drinkDetails.getMaNuocUong());

            if (existingDrink.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("Drink already exists");
            }

            drinkDetails.setNgayTao(new Date());
            return ResponseEntity.status(HttpStatus.CREATED).body(drinkService.saveDrink(drinkDetails));

        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to Create specified Voucher: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/drinks/{id}")
    public ResponseEntity<Object> createDrink(@PathVariable long id, @RequestBody Drink drinkDetails) {
        if (drinkService.existsById(id)) {
            Drink updatedDrink = drinkService.getDrinkById(id).orElseThrow();
            updatedDrink.setMaNuocUong(drinkDetails.getMaNuocUong());
            updatedDrink.setTenNuocUong(drinkDetails.getTenNuocUong());
            updatedDrink.setDonGia(drinkDetails.getDonGia());
            updatedDrink.setNgayCapNhat(new Date());

            try {
                return ResponseEntity.ok(drinkService.saveDrink(updatedDrink));
            } catch (Exception e) {
                return ResponseEntity.unprocessableEntity()
                        .body("Failed to Create specified Voucher: " + e.getCause().getCause().getMessage());
            }
        } else {
            return ResponseEntity.badRequest().body("Failed to get specified Voucher: " + id + "  for update.");
        }

    }

    @DeleteMapping("/drinks/{id}")
    public ResponseEntity<Void> deleteDrinkById(@PathVariable long id) {
        try {
            if (drinkService.existsById(id)) {
                drinkService.deleteDrinkById(id);
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/drinks")
    public ResponseEntity<Void> deleteAllDrinks() {
        try {
            drinkService.deleteAllDrinks();
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
