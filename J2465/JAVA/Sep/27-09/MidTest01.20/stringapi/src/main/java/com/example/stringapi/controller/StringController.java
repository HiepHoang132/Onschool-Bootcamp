package com.example.stringapi.controller;

import java.util.HashSet;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/string")

public class StringController {
    @GetMapping("/reverse")
    public String reverseString(@RequestParam String input) {
        return new StringBuilder(input).reverse().toString();
    }

    @GetMapping("/palindrome")
    public String checkPalindromeString(@RequestParam String input) {
        String lowerCaseInput = input.toLowerCase();
        return new StringBuilder(lowerCaseInput).reverse().toString().equals(lowerCaseInput) ? "Palindrome"
                : "Not palindrome";
    }

    @GetMapping("remove-duplicates")
    public String removeDuplicateCharacters(@RequestParam String input) {
        StringBuilder result = new StringBuilder();
        HashSet<Character> seen = new HashSet<>();

        for (Character c : input.toCharArray()) {
            if (!seen.contains(c)) {
                seen.add(c);
                result.append(c);
            }
        }

        return result.toString();
    }

    @GetMapping("concat")
    public String concatString(@RequestParam String input1, @RequestParam String input2) {
        int l1 = input1.length();
        int l2 = input2.length();

        if(l1 > l2){
            input1 = input1.substring(l1 - l2);
        } else {
            input2 = input2.substring(l2 - l1);
        }

        return input1 + input2;
    }

}
