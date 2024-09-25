package com.example.arrayintegerapi.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class ArrayService {
    int[] largerNumbers = { 1, 23, 32, 43, 54, 65, 86, 10, 15, 16, 18 };

    public ArrayList<Integer> getNumbers(int n) {
        ArrayList<Integer> result = new ArrayList<>();

        for (int number : largerNumbers) {
            if (number > n) {
                result.add(number);
            }
        }

        return result;
    }

    public int getNumber(int index) {
        if (index >= 0 && index < largerNumbers.length) {
            return largerNumbers[index];
        }
        return -1;
    }
}
