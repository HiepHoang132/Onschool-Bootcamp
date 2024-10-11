package com.example.pizza365.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pizza365.model.Menu;
import com.example.pizza365.repository.MenuRepository;

@RestController
@CrossOrigin
public class MenuController {
    @Autowired
    MenuRepository menuRepository;

    @GetMapping("/menus")
    public ResponseEntity<List<Menu>> getAllMenus() {
        try {
            return new ResponseEntity<>(menuRepository.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
