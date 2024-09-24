package com.example.customervisitapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customervisitapi.model.Visit;
import com.example.customervisitapi.service.VisitService;

@RestController
public class VisitController {
    @Autowired
    private VisitService visitService;

    @CrossOrigin
    @GetMapping("/visits")
    public ArrayList<Visit> getVisits() {
        return visitService.getVisits();
    }

}
