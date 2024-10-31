package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Ward;

public interface WardRepository extends JpaRepository<Ward, Long> {
    Optional<Ward> findById(long id);

    Optional<Ward> findByName(String name);
}
