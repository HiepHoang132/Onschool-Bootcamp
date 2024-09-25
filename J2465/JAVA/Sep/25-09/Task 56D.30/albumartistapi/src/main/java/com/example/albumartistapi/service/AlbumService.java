package com.example.albumartistapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.albumartistapi.model.Album;

@Service
public class AlbumService {
    private ArrayList<Album> albums = new ArrayList<>();

    public AlbumService() {
        Album album1 = new Album(1, "Album 1", new ArrayList<>(Arrays.asList("song A1", "song A2", "song A3")));
        Album album2 = new Album(2, "Album 2", new ArrayList<>(Arrays.asList("song B1", "song B2", "song B3")));
        Album album3 = new Album(3, "Album 3", new ArrayList<>(Arrays.asList("song C1", "song C2", "song C3")));

        Album album4 = new Album(4, "Album 4", new ArrayList<>(Arrays.asList("song D1", "song D2", "song D3")));
        Album album5 = new Album(5, "Album 5", new ArrayList<>(Arrays.asList("song E1", "song E2", "song E3")));
        Album album6 = new Album(6, "Album 6", new ArrayList<>(Arrays.asList("song F1", "song F2", "song F3")));

        Album album7 = new Album(7, "Album 7", new ArrayList<>(Arrays.asList("song G1", "song G2", "song G3")));
        Album album8 = new Album(8, "Album 8", new ArrayList<>(Arrays.asList("song H1", "song H2", "song H3")));
        Album album9 = new Album(9, "Album 9", new ArrayList<>(Arrays.asList("song I1", "song I2", "song I3")));

        albums.addAll(Arrays.asList(album1, album2, album3, album4, album5, album6, album7, album8, album9));
    }

    public Album getAlbumById(int id) {
        for (Album album : albums) {
            if (album.getId() == id) {
                return album;
            }
        }
        return null;
    }
}
