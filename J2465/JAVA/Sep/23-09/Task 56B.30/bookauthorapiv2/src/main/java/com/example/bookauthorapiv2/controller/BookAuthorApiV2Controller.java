package com.example.bookauthorapiv2.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookauthorapiv2.Author;
import com.example.bookauthorapiv2.Book;

@RestController
public class Bookauthorapiv2controller {

    @CrossOrigin
    @GetMapping("/books")
    public ArrayList<Book> getBooks() {
        Author author1 = new Author("Nguyen Van A", "vana@example.com", 'm');
        Author author2 = new Author("Nguyen Thi B", "vanb@example.com", 'f');
        Author author3 = new Author("Nguyen Van C", "vanc@example.com", 'm');
        Author author4 = new Author("Tran Thi D", "trand@example.com", 'f');
        Author author5 = new Author("Le Van E", "leve@example.com", 'm');
        Author author6 = new Author("Phan Thi F", "phanf@example.com", 'f');

        System.out.println(author1);
        System.out.println(author2);
        System.out.println(author3);
        System.out.println(author4);
        System.out.println(author5);
        System.out.println(author6);

        Author[] authorList1 = { author1, author2 };
        Author[] authorList2 = { author3, author4 };
        Author[] authorList3 = { author5, author6 };

        Book book1 = new Book("Book A", authorList1, 15.99);
        Book book2 = new Book("Book B", authorList2, 25.99, 10);
        Book book3 = new Book("Book C", authorList3, 30.50, 5);

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
