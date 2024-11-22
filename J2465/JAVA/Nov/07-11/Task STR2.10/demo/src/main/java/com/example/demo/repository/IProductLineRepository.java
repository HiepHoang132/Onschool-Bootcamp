package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.ProductLine;

public interface IProductLineRepository extends JpaRepository<ProductLine, Integer> {
	boolean existsByProductLineName(String productLine);
}
