package com.example.demo.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

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

    @GetMapping("/filter-it-high-salary")
    public List<Employee> filterITAndHighSalaryEmployees() {
        return employeeRepository.findAll()
                .stream()
                .filter(emp -> emp.getSalary() > 6000 && emp.getDepartment().equals("IT"))
                .collect(Collectors.toList());
    }

    @GetMapping("/numbers/to-string")
    public List<String> convertNumbersToString() {
        return IntStream.rangeClosed(1, 10) // Tạo Stream từ 1 đến 10
                .mapToObj(num -> "Số " + num) // Chuyển đổi thành chuỗi
                .collect(Collectors.toList());
    }

    @GetMapping("/group-and-statistics")
    public Map<String, Map<String, Object>> groupAndStatisticsFromFile() {
        Map<String, Map<String, Object>> result = new HashMap<>();
        try (Stream<String> lines = Files.lines(Paths.get("large-data.txt"))) {
            Map<String, List<Employee>> groupedByDepartment = lines.map(line -> {
                String[] parts = line.split(",");
                return new Employee(parts[0], parts[1], Double.parseDouble(parts[2]));
            })
                    .collect(Collectors.groupingBy(Employee::getDepartment));
            groupedByDepartment.forEach((department, employees) -> {
                long count = employees.size();
                double avgSalary = employees.stream().mapToDouble(Employee::getSalary).average().orElse(0);
                Map<String, Object> stats = new HashMap<>();
                stats.put("Total Employees", count);
                stats.put("Average Salary", avgSalary);
                result.put(department, stats);
            });
        } catch (IOException e) {
            e.printStackTrace();
        }
        return result;
    }

    @GetMapping("/top-3-by-department")
    public Map<String, List<Employee>> getTop3EmployeesByDepartment() {
        return employeeRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(Employee::getDepartment))
                .entrySet()
                .stream()
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        entry -> entry.getValue().stream()
                                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())

                                .limit(3)
                                .collect(Collectors.toList())));
    }

}
