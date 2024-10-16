package com.example.province.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.province.model.Province;

public interface ProvinceRepository extends JpaRepository<Province, Long> {
    Province findById(long id);
}
