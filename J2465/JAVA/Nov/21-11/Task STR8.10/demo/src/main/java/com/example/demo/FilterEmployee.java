package com.example.demo;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.model.Employee;

public class FilterEmployee {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
                new Employee("John", 28, "Sales", 5000.0),
                new Employee("Jane", 35, "IT", 6000.0),
                new Employee("Jack", 40, "Sales", 7000.0),
                new Employee("Ji11", 25, "Marketing", 4000.0),
                new Employee("Joe", 32, "Sales", 5500.0));

        List<Employee> filteredEmployees = employees.stream()
                .filter(emp -> emp.age > 30 && emp.department.equals("Sales"))
                .collect(Collectors.toList());
        filteredEmployees.forEach(System.out::println);
    }
}
