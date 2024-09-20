package com.example.splitstringapi.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SplitStringController {

    @GetMapping("/split")
    public String[] getSplitString(@RequestParam String string) {
        String[] splitted = string.split("");

        return splitted;
    }

}
