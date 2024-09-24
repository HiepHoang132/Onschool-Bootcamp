package com.example.authorbookapi.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.authorbookapi.model.Author;

@Service
public class AuthorService {

    private Author[] authors = new Author[3];

    public AuthorService() {
        Author author1 = new Author("J.K. Rowling", "j", 'f');
        Author author2 = new Author("George R.R. Martin", "grrm@example.com", 'm');
        Author author3 = new Author("J.R.R. Tolkien", "jrr.tolkien@example.com", 'm');

        authors[0] = author1;
        authors[1] = author2;
        authors[2] = author3;
    }

    public Author getAuthorByEmail(String email) {
        for (Author author : authors) {
            if (author.getEmail().equals(email)) {
                return author;
            }
        }
        return null;
    }

    public ArrayList<Author> getAuthorByGender(char gender) {
        ArrayList<Author> authorsByGender = new ArrayList<>();

        for (Author author : authors) {
            if (author.getGender() == gender) {
                authorsByGender.add(author);
            }
        }

        return authorsByGender;
    }
}
