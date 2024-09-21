package com.example.luckydice.controller;

import java.util.Random;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LuckyDiceController {

    @CrossOrigin
    @GetMapping("/lucky-dice")
    public String greetings(@RequestParam String username, @RequestParam String firstname,
            @RequestParam String lastname) {
        Random random = new Random();
        int luckyNumber = random.nextInt(6) + 1;
        return String.format("Xin chào: %s, Số may mắn hôm nay của bạn là %d", username, luckyNumber);
    }

}
