package com.example.authorbookapi.services;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.authorbookapi.models.Author;
import com.example.authorbookapi.models.Book;

@Service
public class BookService {
    @Autowired
    private AuthorService authorService;

    private ArrayList<Book> books = new ArrayList<>();

    public BookService(AuthorService _authorService) {
        this.authorService = _authorService;

        Author author1 = authorService.getAuthorByEmail("jkrowling@example.com");
        Author author2 = authorService.getAuthorByEmail("georgeorwell@example.com");
        Author author3 = authorService.getAuthorByEmail("jrrtolkien@example.com");
        Author author4 = authorService.getAuthorByEmail("stephenking@example.com");
        Author author5 = authorService.getAuthorByEmail("agathachristie@example.com");
        Author author6 = authorService.getAuthorByEmail("marktwain@example.com");

        Book book1 = new Book("Magical Adventures", new Author[] { author1, author3 }, 24.99, 150);
        Book book2 = new Book("Tales of Mystery", new Author[] { author5, author4, author2 }, 18.99, 80);
        Book book3 = new Book("Classic Journeys", new Author[] { author6, author2 }, 22.99, 60);

        books.addAll(Arrays.asList(book1, book2, book3));
    }

    public Book getBookByIndex(int index) {
        if (index >= 0 && index < books.size()) {
            return books.get(index);
        }
        return null;
    }
}
