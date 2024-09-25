package com.example.authorbookapi.services;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.authorbookapi.models.Author;

@Service
public class AuthorService {
    private ArrayList<Author> authors = new ArrayList<>();

    public AuthorService() {
        Author author1 = new Author("J.K. Rowling", "jkrowling@example.com", 'f');
        Author author2 = new Author("George Orwell", "georgeorwell@example.com", 'm');
        Author author3 = new Author("J.R.R. Tolkien", "jrrtolkien@example.com", 'm');
        Author author4 = new Author("Stephen King", "stephenking@example.com", 'm');
        Author author5 = new Author("Agatha Christie", "agathachristie@example.com", 'f');
        Author author6 = new Author("Mark Twain", "marktwain@example.com", 'm');

        authors.addAll(Arrays.asList(author1, author2, author3, author4, author5, author6));
    }

    public Author getAuthorByEmail(String email) {
        for (Author author : authors) {
            if (author.getEmail().equals(email)) {
                return author;
            }
        }
        return null;
    }
}
