package com.devcamp.pizza365.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devcamp.pizza365.model.CCountry;

@Repository
public interface CountryRepository extends JpaRepository<CCountry, Long> {
	CCountry findByCountryCode(String countryCode);

}
