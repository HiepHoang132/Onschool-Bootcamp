package com.example.checkoddevenapi.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CheckOddEvenController {
    @GetMapping("/checknumber")

    public String getMethodName(@RequestParam int number) {
        return number % 2 == 0 ? "Even" : "Odd";
    }

}
