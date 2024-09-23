package com.example.bookauthorapi.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookauthorapi.Author;
import com.example.bookauthorapi.Book;

@RestController
public class Bookauthorcontroller {

    @CrossOrigin
    @GetMapping("/books")
    public ArrayList<Book> getBooks() {
        Author author1 = new Author("Nguyen Van A", "vana@example.com", 'm');
        Author author2 = new Author("Nguyen Van B", "vanb@example.com", 'f');
        Author author3 = new Author("Nguyen Van C", "vanc@example.com", 'm');

        Book book1 = new Book("Book A", author1, 15.99);
        Book book2 = new Book("Book B", author2, 25.99, 10);
        Book book3 = new Book("Book C", author3, 20.50, 5);

        System.out.println(book1);
        System.out.println(book2);
        System.out.println(book3);

        ArrayList<Book> bookList = new ArrayList<>();
        bookList.add(book1);
        bookList.add(book2);
        bookList.add(book3);

        return bookList;
    }

}
