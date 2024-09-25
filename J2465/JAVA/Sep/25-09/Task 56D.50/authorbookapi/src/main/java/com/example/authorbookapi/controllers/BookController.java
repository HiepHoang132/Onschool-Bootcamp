package com.example.authorbookapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.authorbookapi.models.Book;
import com.example.authorbookapi.services.BookService;


@RestController
@CrossOrigin

public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books/{bookId}")
    public Book getBook(@PathVariable int bookId) {
        return bookService.getBookByIndex(bookId);
    }
    
}
