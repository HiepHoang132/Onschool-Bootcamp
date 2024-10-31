package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.District;

public interface DistrictRepository extends JpaRepository<District, Long> {
    Optional<District> findById(long id);

    Optional<District> findByName(String name);
}
