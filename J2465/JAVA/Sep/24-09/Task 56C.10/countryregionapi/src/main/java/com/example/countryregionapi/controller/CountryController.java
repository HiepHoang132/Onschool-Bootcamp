package com.example.countryregionapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.countryregionapi.model.Country;
import com.example.countryregionapi.service.CountryService;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @CrossOrigin
    @GetMapping("/countries")
    public ArrayList<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/country-info")
    public Country getCountry(@RequestParam String countryCode) {
        return countryService.getCountryByCode(countryCode);
    }

}
