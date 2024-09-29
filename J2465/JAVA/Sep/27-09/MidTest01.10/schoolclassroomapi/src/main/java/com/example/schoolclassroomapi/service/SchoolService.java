package com.example.schoolclassroomapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.schoolclassroomapi.model.Classroom;
import com.example.schoolclassroomapi.model.School;

@Service
public class SchoolService {
    @Autowired
    private ClassroomService classroomService;

    private ArrayList<School> schools = new ArrayList<>();

    public SchoolService(ClassroomService _classroomService) {
        this.classroomService = _classroomService;

        Classroom classroom1A = classroomService.getClassroomById(1);
        Classroom classroom1B = classroomService.getClassroomById(2);
        Classroom classroom1C = classroomService.getClassroomById(3);
        Classroom classroom2A = classroomService.getClassroomById(4);
        Classroom classroom2B = classroomService.getClassroomById(5);
        Classroom classroom2C = classroomService.getClassroomById(6);
        Classroom classroom3A = classroomService.getClassroomById(7);
        Classroom classroom3B = classroomService.getClassroomById(8);
        Classroom classroom3C = classroomService.getClassroomById(9);

        School school1 = new School(1, "Trường Tiểu học A", "123 Đường A",
                new ArrayList<>(Arrays.asList(classroom1A, classroom1B, classroom1C)));
        School school2 = new School(2, "Trường Trung học B", "456 Đường B",
                new ArrayList<>(Arrays.asList(classroom2A, classroom2B, classroom2C)));
        School school3 = new School(3, "Trường THPT C", "789 Đường C",
                new ArrayList<>(Arrays.asList(classroom3A, classroom3B, classroom3C)));

        schools.addAll(Arrays.asList(school1, school2, school3));
    }

    public ArrayList<School> getSchools() {
        return schools;
    }

    public School getSchoolById(int id) {
        for (School school : schools) {
            if (school.getId() == id) {
                return school;
            }
        }
        return null;
    }

    public ArrayList<School> getSchoolsByNoStudent(int noNumber) {
        ArrayList<School> result = new ArrayList<>();

        for (School school : schools) {
            if (school.getTotalStudent() > noNumber) {
                result.add(school);
            }
        }

        return result;
    }
}
