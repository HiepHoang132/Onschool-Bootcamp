package com.example.countryregion.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.countryregion.model.Region;

public interface RegionRepository extends JpaRepository<Region, Integer> {

}
