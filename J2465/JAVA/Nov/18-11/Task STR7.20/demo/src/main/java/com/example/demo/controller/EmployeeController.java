package com.example.demo.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Employee;

@RestController
public class EmployeeController {
    @GetMapping("/from-file")
    public List<Employee> getEmployeesFromFile() {
        List<Employee> employees = new ArrayList<>();
        try (Stream<String> lines = Files.lines(Paths.get("large-data.txt"))) {
            employees = lines.map(line -> {
                String[] parts = line.split(",");
                return new Employee(parts[0], parts[1], Double.parseDouble(parts[2]));
            })
                    .filter(emp -> emp.getSalary() > 7000) // Lọc nhân viên có lương trên 7000
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return employees;
    }

    @GetMapping("/random-until-90")
    public List<Integer> getRandomNumbersUntil90() {
        return Stream.generate(() -> new Random().nextInt(100) + 1) // Tạo Stream vô hạn với số ngẫu nhiên từ 1 đến 100
                .peek(num -> System.out.println("Số hiện tại: " + num)) // Kiểm tra từng số
                .takeWhile(num -> num <= 90) // Dừng khi số lớn hơn 90
                .collect(Collectors.toList());
    }

    @GetMapping("/top-salary-parallel-file")
    public List<Employee> getTopSalaryEmployeesFromFileParallel() {
        List<Employee> employees = new ArrayList<>();
        try (Stream<String> lines = Files.lines(Paths.get("large-data.txt")).parallel()) { // Sử dụng Stream song song
            employees = lines.map(line -> {
                String[] parts = line.split(",");
                return new Employee(parts[0], parts[1], Double.parseDouble(parts[2]));
            })
                    .sorted(Comparator.comparingDouble(Employee::getSalary).reversed()) // Sắp xếp giảm dần theo lương
                    .limit(5) // Lấy top 5 nhân viên
                    .collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return employees;
    }

}
