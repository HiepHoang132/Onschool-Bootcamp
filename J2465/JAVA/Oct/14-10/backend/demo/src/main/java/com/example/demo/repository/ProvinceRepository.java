package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Province;

public interface ProvinceRepository extends JpaRepository<Province, Long> {
    Optional<Province> findById(long id);

    Optional<Province> findByCode(String code);
}
