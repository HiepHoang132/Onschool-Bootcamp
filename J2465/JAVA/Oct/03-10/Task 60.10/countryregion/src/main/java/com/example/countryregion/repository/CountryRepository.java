package com.example.countryregion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.countryregion.model.Country;

public interface CountryRepository extends JpaRepository<Country, Integer> {
    Country findByCountryCode(String countryCode);
}
