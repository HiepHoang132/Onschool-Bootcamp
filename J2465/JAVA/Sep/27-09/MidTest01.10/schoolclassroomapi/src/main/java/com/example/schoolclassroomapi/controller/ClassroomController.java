package com.example.schoolclassroomapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.schoolclassroomapi.model.Classroom;
import com.example.schoolclassroomapi.service.ClassroomService;

@RestController
@CrossOrigin
public class ClassroomController {
    @Autowired
    private ClassroomService classroomService;

    @GetMapping("/classrooms")
    public ArrayList<Classroom> getClassrooms() {
        return classroomService.getClassrooms();
    }

    @GetMapping("/classroom/{noNumber}")
    public ArrayList<Classroom> getClassroomByNoNumber(@PathVariable int noNumber) {
        return classroomService.getClassroomsByNoStudent(noNumber);
    }

}
