package com.example.demo.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/log")
    public void logEmployeeInfo() {
        employeeRepository.findAll().stream()
                .forEach(emp -> System.out.println("Tên: " + emp.getName() + ", Lương: " + emp.getSalary()));
    }

    @GetMapping("/high-salary-list")
    public List<Employee> getHighSalaryAsList() {
        return employeeRepository.findAll().stream()
                .filter(emp -> emp.getSalary() > 6000).collect(Collectors.toList());
    }

    @GetMapping("/map")
    public Map<Long, Employee> getEmployeeAsMap() {
        return employeeRepository.findAll().stream()
                .collect(Collectors.toMap(Employee::getId, emp -> emp));
    }

    @GetMapping("/total-salary")
    public double getTotalSalary() {
        return employeeRepository.findAll().stream()
                .map(Employee::getSalary).reduce(0.0, Double::sum);
    }

    @GetMapping("/it-count")
    public long countITDepartment() {
        return employeeRepository.findAll().stream()
                .filter(emp -> emp.getDepartment().equals("IT")).count();
    }

    @GetMapping("/highest-salary")
    public Optional<Employee> getHighestSalary() {
        return employeeRepository.findAll().stream()
                .max(Comparator.comparingDouble(Employee::getSalary));
    }

    @GetMapping("/first-low-salary")
    public Optional<Employee> getFirstLowSalary() {
        return employeeRepository.findAll().stream()
                .filter(emp -> emp.getSalary() < 7000)
                .findFirst();
    }

    @GetMapping("/any-finance")
    public boolean isAnyEmployeeInFinance() {
        return employeeRepository.findAll().stream()
                .anyMatch(emp -> emp.getDepartment().equals("Finance"));
    }

    @GetMapping("/all-above-3000")
    public boolean areAllSalaryAbove() {
        return employeeRepository.findAll().stream().allMatch(emp -> emp.getSalary() > 3000);
    }

    @GetMapping("/none-legal")
    public boolean isNoEmployeeInLegal() {
        return employeeRepository.findAll().stream().noneMatch(emp -> emp.getDepartment().equals("Legal"));
    }

}
