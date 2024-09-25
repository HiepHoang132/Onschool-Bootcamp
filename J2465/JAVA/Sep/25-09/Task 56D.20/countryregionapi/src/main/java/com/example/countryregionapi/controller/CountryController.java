package com.example.countryregionapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.countryregionapi.model.Country;
import com.example.countryregionapi.service.CountryService;

@RestController
@CrossOrigin
public class CountryController {
    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{index}")
    public Country getCountry(@PathVariable int index) {
        return countryService.getCountryByIndex(index);
    }

}
