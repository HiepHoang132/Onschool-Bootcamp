package com.example.authorbookapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.authorbookapi.model.Author;
import com.example.authorbookapi.service.AuthorService;


@RestController
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    @CrossOrigin
    @GetMapping("/author-info")
    public Author getMethodName(@RequestParam String email) {
        return authorService.getAuthorByEmail(email);
    }

    @GetMapping("/author-gender")
    public ArrayList<Author> getMethodName(@RequestParam char gender) {
        return authorService.getAuthorByGender(gender);
    }
    

}
