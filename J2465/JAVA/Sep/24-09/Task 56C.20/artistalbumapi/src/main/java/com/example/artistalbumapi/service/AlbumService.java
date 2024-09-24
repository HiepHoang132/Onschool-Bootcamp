package com.example.artistalbumapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.artistalbumapi.model.Album;

@Service
public class AlbumService {
    private ArrayList<Album> albums = new ArrayList<Album>();

    ArrayList<String> album1Songs = new ArrayList<>(Arrays.asList("Song A1", "Song A2", "Song A3"));
    ArrayList<String> album2Songs = new ArrayList<>(Arrays.asList("Song B1", "Song B2"));
    ArrayList<String> album3Songs = new ArrayList<>(Arrays.asList("Song C1", "Song C2", "Song C3", "Song C4"));

    Album album1 = new Album(1, "Album One", album1Songs);
    Album album2 = new Album(2, "Album Two", album2Songs);
    Album album3 = new Album(3, "Album Three", album3Songs);

    public AlbumService() {
        albums.add(album1);
        albums.add(album2);
        albums.add(album3);
    }

    public Album getAlbumById(String albumId) {
        for (Album album : albums) {
            if (album.getId() == Integer.parseInt(albumId)) {
                return album;
            }
        }
        return null;
    }

}
