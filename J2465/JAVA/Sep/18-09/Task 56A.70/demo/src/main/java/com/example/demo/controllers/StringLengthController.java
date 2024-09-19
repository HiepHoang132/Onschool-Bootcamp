package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StringLengthController {

    @GetMapping("/length")
    public int getStringLength(@RequestParam String param) {
        return param.length();
    }

}
