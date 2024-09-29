package com.example.schoolclassroomapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.schoolclassroomapi.model.School;
import com.example.schoolclassroomapi.service.SchoolService;

@RestController
@CrossOrigin
public class SchoolController {
    @Autowired
    private SchoolService schoolService;

    @GetMapping("/schools")
    public ArrayList<School> getSchools() {
        return schoolService.getSchools();
    }

    @GetMapping("/school/{schoolId}")
    public School getSchoolById(@PathVariable int schoolId) {
        return schoolService.getSchoolById(schoolId);
    }

    @GetMapping("/schools/{noNumber}")
    public ArrayList<School> getSchoolByNoNumber(@PathVariable int noNumber) {
        return schoolService.getSchoolsByNoStudent(noNumber);
    }
}
