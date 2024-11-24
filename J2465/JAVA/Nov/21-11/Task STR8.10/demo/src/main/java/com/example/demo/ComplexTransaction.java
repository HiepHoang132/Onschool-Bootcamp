package com.example.demo;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import com.example.demo.model.Transaction;

public class ComplexTransaction {
    public static void main(String[] args) {
        List<Transaction> transactions = Arrays.asList(
                new Transaction("2023-01-15", "Deposit", 1500),
                new Transaction("2023-02-20", "Withdrawal", 500),
                new Transaction("2022-12-25", "Deposit", 2000),
                new Transaction("2023-03-10", "Deposit", 800),
                new Transaction("2023-04-05", "Withdrawal", 1000),
                new Transaction("2023-04-18", "Deposit", 1200));
        // Lọc các giao dịch năm 2023 và nhóm theo loại giao dịch
        Map<String, Double> totalByType = transactions.stream()
                .filter(t -> t.date.startsWith("2023"))
                .collect(Collectors.groupingBy(
                        t -> t.type,
                        Collectors.summingDouble(t -> t.amount)));
        totalByType.forEach((type, total) -> {
            System.out.println("Loại giao dịch: " + type + ", Tổng số tiền: " + total);
        });
    }
}
