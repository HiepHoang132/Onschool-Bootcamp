package com.example.demo.controller;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/filter")
    public List<Employee> filterEmployees(
            @RequestParam(required = false) String department,
            @RequestParam(required = false) Double minSalary,
            @RequestParam(required = false) Integer minAge) {
        return employeeRepository.findAll()
                .stream()
                .filter(emp -> department == null || emp.getDepartment().equalsIgnoreCase(department))
                .filter(emp -> minSalary == null || emp.getSalary() >= minSalary)
                .filter(emp -> minAge == null || emp.getAge() >= minAge)
                .collect(Collectors.toList());
    }

    @GetMapping("/statistics")
    public Map<String, Object> getStatistics() {
        List<Employee> employees = employeeRepository.findAll();
        Map<String, Long> countByDepartment = employees.stream()
                .collect(Collectors.groupingBy(Employee::getDepartment, Collectors.counting()));
        double averageSalary = employees.stream()
                .mapToDouble(Employee::getSalary)
                .average()
                .orElse(0);
        Optional<Employee> maxSalaryEmployee = employees.stream()
                .max(Comparator.comparingDouble(Employee::getSalary));
        return Map.of(
                "countByDepartment", countByDepartment,
                "averageSalary", averageSalary,
                "maxSalaryEmployee", maxSalaryEmployee.orElse(null));
    }

    @GetMapping("/sorted")
    public List<Employee> getSortedEmployees(
            @RequestParam(defaultValue = "name") String sortBy,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Comparator<Employee> comparator = Comparator.comparing(Employee::getName);
        if ("salary".equals(sortBy))
            comparator = Comparator.comparing(Employee::getSalary).reversed();
        else if ("department".equals(sortBy))
            comparator = Comparator.comparing(Employee::getDepartment);
        return employeeRepository.findAll()
                .stream()
                .sorted(comparator)
                .skip(page * size)
                .limit(size)
                .collect(Collectors.toList());
    }

    @GetMapping("/projects")
    public List<String> getEmployeeProjects(@RequestParam Long employeeId) {
        return employeeRepository.findById(employeeId)
                .map(emp -> Arrays.stream(emp.getProjects().split(","))
                        .map(String::trim)
                        .distinct()
                        .collect(Collectors.toList()))
                .orElse(Collections.emptyList());
    }

}
