package com.example.pizza365.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizza365.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long>{
    
}
