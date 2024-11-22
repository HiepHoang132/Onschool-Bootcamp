package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Office;

public interface IOfficeRepository extends JpaRepository<Office, Integer> {

}
