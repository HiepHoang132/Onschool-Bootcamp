package com.example.demo.controller;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
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

    @GetMapping("/high-salary")
    public List<Employee> getEmployeeOver5000() {
        return employeeRepository.findAll()
                .stream()
                .filter(emp -> emp.getSalary() > 5000)
                .collect(Collectors.toList());
    }

    @GetMapping("/names")
    public List<String> getEmployeeNames() {
        return employeeRepository.findAll()
                .stream()
                .map(Employee::getName)
                .collect(Collectors.toList());
    }

    @GetMapping("/departments")
    public List<String> getUniqueDepartments() {
        return employeeRepository.findAll()
                .stream()
                .map(emp -> Arrays.asList(emp.getDepartment().split(",")))
                .flatMap(List::stream)
                .distinct()
                .collect(Collectors.toList());
    }

    @GetMapping("/departments/unique")
    public List<String> getUniqueDepartmentsDirect() {
        return employeeRepository.findAll()
                .stream()
                .map(Employee::getDepartment) // Lấy tên phòng ban
                .distinct() // Loại bỏ trùng lặp
                .collect(Collectors.toList());
    }

    @GetMapping("/salary/sorted/reversed")
    public List<Employee> getEmployeeBySalarySortedReversed() {
        return employeeRepository.findAll()
                .stream()
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                .collect(Collectors.toList());
    }

    @GetMapping("/log-salary")
    public List<Employee> logSalary() {
        return employeeRepository.findAll()
                .stream()
                .peek(emp -> System.out.println("Name: " + emp.getName() + ", Salary: " + emp.getSalary()))
                .collect(Collectors.toList());
    }

    @GetMapping("/highest-salary")
    public List<Employee> getHighestSalary() {
        return employeeRepository.findAll()
                .stream()
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed())
                .skip(3)
                .limit(5)
                .collect(Collectors.toList());
    }

    @GetMapping("/filtered-employees")
    public List<String> getFilteredEmployees() {
        return employeeRepository.findAll()
                .stream()
                // Lọc theo độ tuổi, phòng ban và mức lương
                .filter(emp -> emp.getAge() > 30)
                .filter(emp -> emp.getSalary() > 5000)
                // Hiển thị lương của từng nhân viên mà không thay đổi Stream
                .peek(emp -> System.out.println("Lương của " + emp.getName() + ": " + emp.getSalary()))
                // Chuyển đổi danh sách department từ String sang List và làm phẳng các
                // department
                .flatMap(emp -> Arrays.stream(emp.getDepartment().split(",")))
                // Loại bỏ các department trùng lặp
                .distinct()
                // Sắp xếp các department theo tên
                .sorted()
                // Giới hạn danh sách sau khi bỏ qua 2 phần tử đầu tiên
                .skip(2)
                .limit(5)
                // Thu thập kết quả về List
                .collect(Collectors.toList());
    }

}
