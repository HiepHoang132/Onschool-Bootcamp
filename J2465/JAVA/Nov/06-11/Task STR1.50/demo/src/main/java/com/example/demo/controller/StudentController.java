package com.example.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/over2000")
    public List<Student> getStudentOver2000() {
        return studentRepository.findAll()
                .stream()
                .filter(emp -> emp.getNgay_sinh().getYear() > 2000)
                .collect(Collectors.toList());
    }

    @GetMapping("/noi-sinh/{noi_sinh}")
    public List<Student> getStudentByNoiSinh(@PathVariable String noi_sinh) {
        return studentRepository.findAll()
                .stream()
                .filter(emp -> {
                    System.out.println("Kiểm tra nơi sinh: " + (emp.getNoi_sinh()));
                    return emp.getNoi_sinh().equalsIgnoreCase(noi_sinh.trim());
                })
                .collect(Collectors.toList());

    }

    @GetMapping("/diem/{diem}")
    public List<Student> getStudentByDiem(@PathVariable Long diem) {
        return studentRepository.findAll()
                .stream()
                .filter(emp -> {
                    System.out.println("Kiểm tra điểm: " + (emp.getDiem()));
                    return emp.getDiem() > diem;
                })
                .collect(Collectors.toList());

    }

}
