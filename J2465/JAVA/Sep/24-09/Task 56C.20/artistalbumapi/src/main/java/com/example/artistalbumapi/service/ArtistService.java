package com.example.artistalbumapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.artistalbumapi.model.Album;
import com.example.artistalbumapi.model.Artist;

@Service
public class ArtistService {

    @Autowired
    private AlbumService albumService;

    private ArrayList<Artist> artists = new ArrayList<>();

    public ArtistService(AlbumService _albumService) {
        this.albumService = _albumService;

        Album album1 = albumService.getAlbumById("1");
        Album album2 = albumService.getAlbumById("2");
        Album album3 = albumService.getAlbumById("3");

        // Assigning albums to artists
        ArrayList<Album> artist1Albums = new ArrayList<>(Arrays.asList(album1, album2));
        ArrayList<Album> artist2Albums = new ArrayList<>(Arrays.asList(album3));

        // Creating mock artists
        Artist artist1 = new Artist(1, "Maroon 5", artist1Albums);
        Artist artist2 = new Artist(2, "Taylor Swift", artist2Albums);

        artists.add(artist1);
        artists.add(artist2);
    }

    public ArrayList<Artist> getArtists() {
        return artists;
    }

    public Artist getArtistById(String id) {
        for (Artist artist : artists) {
            if (artist.getId() == (Integer.parseInt(id))) {
                return artist;
            }
        }
        return null;
    }
}
