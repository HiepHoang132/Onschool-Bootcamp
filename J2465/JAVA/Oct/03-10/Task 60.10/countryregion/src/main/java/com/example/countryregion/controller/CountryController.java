package com.example.countryregion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.countryregion.CountryService;
import com.example.countryregion.model.Country;
import com.example.countryregion.model.Region;
import com.example.countryregion.repository.RegionRepository;

@RestController
@CrossOrigin

public class CountryController {
    @Autowired
    CountryService countryService;

    @Autowired
    RegionRepository regionRepository;

    @GetMapping("/countries")
    public ResponseEntity<List<Country>> getAllCountries() {
        try {
            return new ResponseEntity<>(countryService.getAllCountries(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/{countryCode}/regions")
    public ResponseEntity<List<Region>> getRegionsByCountryCode(@PathVariable String countryCode) {
        try {
            Country country = countryService.getCountryByCode(countryCode);

            if (country == null)
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(country.getRegions(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

}
