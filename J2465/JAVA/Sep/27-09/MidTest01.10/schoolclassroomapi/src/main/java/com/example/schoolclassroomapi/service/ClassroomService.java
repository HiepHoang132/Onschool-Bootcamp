package com.example.schoolclassroomapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.schoolclassroomapi.model.Classroom;

@Service
public class ClassroomService {
    private ArrayList<Classroom> classrooms = new ArrayList<>();

    public ClassroomService() {
        Classroom classroom1A = new Classroom(1, "Class 1A", 30);
        Classroom classroom1B = new Classroom(2, "Class 1B", 28);
        Classroom classroom1C = new Classroom(3, "Class 1C", 32);

        Classroom classroom2A = new Classroom(4, "Class 2A", 25);
        Classroom classroom2B = new Classroom(5, "Class 2B", 27);
        Classroom classroom2C = new Classroom(6, "Class 2C", 26);

        Classroom classroom3A = new Classroom(7, "Class 3A", 29);
        Classroom classroom3B = new Classroom(8, "Class 3B", 31);
        Classroom classroom3C = new Classroom(9, "Class 3C", 30);

        classrooms.addAll(
                Arrays.asList(classroom1A, classroom1B, classroom1C, classroom2A, classroom2B, classroom2C, classroom3A,
                        classroom3B, classroom3C));
    }

    public ArrayList<Classroom> getClassrooms() {
        return classrooms;
    }

    public Classroom getClassroomById(int id) {
        for (Classroom classroom : classrooms) {
            if (classroom.getId() == id) {
                return classroom;
            }
        }
        return null;
    }

    public ArrayList<Classroom> getClassroomsByNoStudent(int noNumber) {
        ArrayList<Classroom> result = new ArrayList<>();

        for (Classroom classroom : classrooms) {
            if (classroom.getNoStudent() > noNumber) {
                result.add(classroom);
            }
        }

        return result;
    }
}
