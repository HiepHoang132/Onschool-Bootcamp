package com.example.rainbowlistapi.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RainbowListController {
    @GetMapping("/rainbow")
    public ArrayList<String> getRainbowColor() {
        ArrayList<String> colors = new ArrayList<>();

        colors.add("red");
        colors.add("orange");
        colors.add("yellow");
        colors.add("green");
        colors.add("blue");
        colors.add("indigo");
        colors.add("violet");

        return colors;
    }

}
