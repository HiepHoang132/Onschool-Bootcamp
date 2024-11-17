package com.example.demo.controller;

import java.util.Comparator;
import java.util.IntSummaryStatistics;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
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

    @GetMapping("/it-list")
    public List<Employee> getITEmployeesAsList() {
        return employeeRepository.findAll()
                .stream()
                .filter(emp -> emp.getDepartment().equals("IT"))
                .collect(Collectors.toList());
    }

    @GetMapping("/unique-departments")
    public Set<String> getUniqueDepartments() {
        return employeeRepository.findAll()
                .stream()
                .map(Employee::getDepartment)
                .collect(Collectors.toSet());
    }

    @GetMapping("/group-by-department")
    public Map<String, List<Employee>> groupEmployeesByDepartment() {
        return employeeRepository.findAll()
                .stream()
                .collect(Collectors.groupingBy(Employee::getDepartment));
    }

    @GetMapping("/partition-by-salary")
    public Map<Boolean, List<Employee>> partitionEmployeesBySalary() {
        return employeeRepository.findAll()
                .stream()
                .collect(Collectors.partitioningBy(emp -> emp.getSalary() > 5000));
    }

    @GetMapping("/names-joined")
    public String joinEmployeeNames() {
        return employeeRepository.findAll()
                .stream()
                .map(Employee::getName)
                .collect(Collectors.joining(", "));
    }

    @GetMapping("/age-summary")
    public IntSummaryStatistics getAgeSummary() {
        return employeeRepository.findAll()
                .stream()
                .collect(Collectors.summarizingInt(Employee::getAge));
    }

    @GetMapping("/average-salary")
    public double getAverageSalary() {
        return employeeRepository.findAll()
                .stream()
                .collect(Collectors.averagingDouble(Employee::getSalary));
    }

    @GetMapping("/total-salary-parallel")
    public double getTotalSalaryParallel() {
        return employeeRepository.findAll()
                .parallelStream()
                .mapToDouble(Employee::getSalary)
                .sum();
    }

    @GetMapping("/compare-salary-processing")
    public Map<String, Long> compareSalaryProcessing() {
        long startSequential = System.currentTimeMillis();
        // Sử dụng Stream tuần tự
        double totalSalarySequential = employeeRepository.findAll()
                .stream()
                .mapToDouble(Employee::getSalary)
                .sum();
        long endSequential = System.currentTimeMillis();

        long startParallel = System.currentTimeMillis();
        // Sử dụng Stream song song
        double totalSalaryParallel = employeeRepository.findAll()
                .parallelStream()
                .mapToDouble(Employee::getSalary)
                .sum();
        long endParallel = System.currentTimeMillis();
        // Trả về thời gian thực hiện
        return Map.of(
                "Sequential Time (ms)", (endSequential - startSequential),
                "Parallel Time (ms)", (endParallel - startParallel));
    }

    @GetMapping("/top-salary-parallel")
    public List<Employee> getTopSalaryEmployeesParallel() {
        return employeeRepository.findAll()
                .parallelStream() // Sử dụng Stream song song
                .sorted(Comparator.comparingDouble(Employee::getSalary).reversed()) // Sắp xếp theo lương giảm dần
                .limit(5) // Giới hạn top 5
                .collect(Collectors.toList());
    }

    @GetMapping("/parallel-update")
    public String parallelUpdateDemo() {
        AtomicInteger employeeCount = new AtomicInteger();
        // Sử dụng Stream song song để cập nhật biến toàn cục (race condition)
        employeeRepository.findAll()
                .parallelStream()
                .forEach(emp -> {
                    int currentCount = employeeCount.incrementAndGet(); // Đồng bộ hóa với AtomicInteger
                    System.out.println("Số lượng hiện tại: " + currentCount);
                });
        return "Tổng số nhân viên: " + employeeCount.get();
    }

}
