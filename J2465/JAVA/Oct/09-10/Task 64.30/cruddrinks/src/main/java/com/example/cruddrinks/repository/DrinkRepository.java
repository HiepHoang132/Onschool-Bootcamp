package com.example.cruddrinks.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cruddrinks.model.Drink;

public interface DrinkRepository extends JpaRepository<Drink, Long> {
    Optional<Drink> findByMaNuocUong(String maNuocUong);
}
