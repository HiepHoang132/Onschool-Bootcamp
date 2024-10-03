package com.example.drinks.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.drinks.model.Drinks;

public interface DrinksRepository extends JpaRepository<Drinks, Long> {

}
