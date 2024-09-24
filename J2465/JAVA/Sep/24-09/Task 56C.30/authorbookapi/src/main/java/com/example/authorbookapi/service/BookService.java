package com.example.authorbookapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.authorbookapi.model.Author;
import com.example.authorbookapi.model.Book;

@Service
public class BookService {

    @Autowired
    private AuthorService authorService;

    private ArrayList<Book> books = new ArrayList<>();

    public BookService(AuthorService _authorService) {
        this.authorService = _authorService;

        Author author1 = authorService.getAuthorByEmail("jk.rowling@example.com");
        Author author2 = authorService.getAuthorByEmail("grrm@example.com");
        Author author3 = authorService.getAuthorByEmail("jrr.tolkien@example.com");

        Book book1 = new Book("Harry Potter and the Philosopher's Stone", new Author[] { author1 }, 19.99, 100);
        Book book2 = new Book("A Game of Thrones", new Author[] { author2 }, 25.99, 200);
        Book book3 = new Book("The Lord of the Rings", new Author[] { author3 }, 29.99, 150);
        Book book4 = new Book("Fantastic Beasts and Where to Find Them", new Author[] { author1 }, 14.99, 75);

        books.addAll(Arrays.asList(book1, book2, book3, book4));
    }

    public ArrayList<Book> getBooks() {
        return books;
    }

    public ArrayList<Book> getBooksByQty(int qty) {
        ArrayList<Book> returnedBooks = new ArrayList<>();

        for (Book book : books) {
            if (book.getQty() >= qty) {
                returnedBooks.add(book);
            }
        }
        return returnedBooks;
    }
}
