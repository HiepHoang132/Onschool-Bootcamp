package com.example.province.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.province.model.District;

public interface DistrictRepository extends JpaRepository<District, Long> {
    District findById(long id);
}
