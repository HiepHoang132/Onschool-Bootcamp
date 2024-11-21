package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/over30")
    public List<Employee> getEmployeeOver30() {
        return employeeRepository.findAll()
                .stream()
                .filter(emp -> emp.getAge() > 30)
                .collect(Collectors.toList());
    }

    @GetMapping("/department/{department}")
    public List<Employee> getEmployeeByDepartment(@PathVariable String department) {
        return employeeRepository.findAll()
                .stream()
                .filter(emp -> {
                    System.out.println("Đang kiểm tra phòng ban: " + emp.getDepartment());
                    return emp.getDepartment().equalsIgnoreCase(department);
                })
                .collect(Collectors.toList());
    }

    @GetMapping("/total-salary")
    public Long getTotalSalarySequential() {
        long startTime = System.currentTimeMillis();
        long totalSalary = employeeRepository.findAll().stream().mapToLong(emp -> emp.getSalary()).sum();
        long endTime = System.currentTimeMillis();
        System.out.println("Stream sequential time: " + (endTime - startTime) + "ms");
        return totalSalary;
    }

    @GetMapping("/total-salary-parallel")
    public Long getTotalSalaryParallel() {
        long startTime = System.currentTimeMillis();
        long totalSalary = employeeRepository.findAll().parallelStream().mapToLong(emp -> emp.getSalary()).sum();
        long endTime = System.currentTimeMillis();
        System.out.println("Stream parallel time: " + (endTime - startTime) + "ms");
        return totalSalary;
    }

}
