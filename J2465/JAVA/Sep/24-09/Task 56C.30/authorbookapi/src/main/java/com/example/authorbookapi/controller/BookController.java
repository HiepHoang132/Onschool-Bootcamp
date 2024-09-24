package com.example.authorbookapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.authorbookapi.model.Book;
import com.example.authorbookapi.service.BookService;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    @CrossOrigin
    @GetMapping("/books")
    public ArrayList<Book> getBooks() {
        return bookService.getBooks();
    }

    @GetMapping("/book-quantity")
    public ArrayList<Book> getBooks(@RequestParam int quantityNumber) {
        return bookService.getBooksByQty(quantityNumber);
    }

}
