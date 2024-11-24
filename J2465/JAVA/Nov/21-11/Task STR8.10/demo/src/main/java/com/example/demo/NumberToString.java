package com.example.demo;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class NumberToString {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        List<String> numberStrings = numbers.stream()
                .map(n -> "Number: " + n)
                .collect(Collectors.toList());
        numberStrings.forEach(System.out::println);
    }
}
