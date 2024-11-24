package com.example.demo.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/filter")
    public List<Employee> filterEmployees(
            @RequestParam(required = false) Integer minAge,
            @RequestParam(required = false) String department,
            @RequestParam(required = false) Double minSalary) {
        return employeeRepository.findAll().stream()
                .filter(emp -> minAge == null || emp.getAge() >= minAge)
                .filter(emp -> department == null || emp.getDepartment().equalsIgnoreCase(department))
                .filter(emp -> minSalary == null || emp.getSalary() >= minSalary)
                .collect(Collectors.toList());
    }

    @GetMapping("/statistics")
    public Map<String, Long> countByDepartment() {
        return employeeRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(Employee::getDepartment, Collectors.counting()));
    }

    @GetMapping("/from-file")
    public List<Employee> getEmployeesFromFile() {
        try (Stream<String> lines = Files.lines(Paths.get("employees.txt"))) {
            return lines.map(line -> {
                String[] parts = line.split(",");
                return new Employee(parts[0], parts[1], Double.parseDouble(parts[2]));
            })
                    .filter(emp -> emp.getSalary() > 5000)
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
            return Collections.emptyList();
        }
    }
}
