package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Country;
import com.example.demo.repository.ICountryRepository;

@RestController
@CrossOrigin
@RequestMapping("/")
public class CountryController {

	@Autowired
	ICountryRepository gCountryRepository;

	@GetMapping("/country/{countryName}")
	public ResponseEntity<List<Country>> getAllCountryByCountryNameLike1(@PathVariable String countryName) {
		try {
			List<Country> countries = new ArrayList<Country>();
			gCountryRepository.findCountryByCountryNameLike(countryName).forEach(countries::add);
			return new ResponseEntity<>(countries, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
