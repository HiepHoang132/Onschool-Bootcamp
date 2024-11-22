package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Employee;


public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
	boolean existsByEmail(String email);
	List<Employee> findById(int id);
}
