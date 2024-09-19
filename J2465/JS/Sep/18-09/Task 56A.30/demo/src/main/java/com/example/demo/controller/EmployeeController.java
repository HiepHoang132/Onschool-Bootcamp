package com.example.demo.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Employee;

@RestController
public class EmployeeController {
    @GetMapping("/employees")

    public ArrayList<Employee> getEmployees() {
        ArrayList<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1, "Hiep", "Hoang", 30000));
        employees.add(new Employee(2, "Mai", "Chi Tho", 60000));

        return employees;
    }
}
