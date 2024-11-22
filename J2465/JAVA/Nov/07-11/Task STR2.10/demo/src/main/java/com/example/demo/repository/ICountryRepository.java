package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Country;

public interface ICountryRepository extends JpaRepository<Country, Integer> {

	@Query(value = "SELECT * FROM countries WHERE country_name LIKE :countryName", nativeQuery = true)
	List<Country> findCountryByCountryNameLike(@Param("countryName") String countryName);

}
