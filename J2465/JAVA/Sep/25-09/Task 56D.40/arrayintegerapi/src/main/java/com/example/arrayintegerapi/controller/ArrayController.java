package com.example.arrayintegerapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.arrayintegerapi.service.ArrayService;

@RestController
public class ArrayController {
    @Autowired
    private ArrayService arrayService;

    @GetMapping("/array-int-request-query")
    public ArrayList<Integer> getNumbers(@RequestParam int pos) {
        return arrayService.getNumbers(pos);
    }

    @GetMapping("/array-int-param/{index}")
    public int getNumber(@PathVariable int index) {
        return arrayService.getNumber(index);
    }

}
