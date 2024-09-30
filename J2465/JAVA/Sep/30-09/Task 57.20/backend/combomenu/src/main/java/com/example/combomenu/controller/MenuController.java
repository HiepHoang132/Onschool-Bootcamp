package com.example.combomenu.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.combomenu.model.Menu;

@RestController

public class MenuController {

    @CrossOrigin
    @GetMapping("/combomenu")
    public ArrayList<Menu> getComboMenu() {

        ArrayList<Menu> menu = new ArrayList<Menu>();
        Menu sizeS = new Menu('S', 20, 2, 200, 2, 150000);
        Menu sizeM = new Menu('M', 25, 4, 300, 3, 200000);
        Menu sizeL = new Menu('L', 30, 8, 500, 4, 250000);

        menu.add(sizeS);
        menu.add(sizeM);
        menu.add(sizeL);

        return menu;
    }
}
