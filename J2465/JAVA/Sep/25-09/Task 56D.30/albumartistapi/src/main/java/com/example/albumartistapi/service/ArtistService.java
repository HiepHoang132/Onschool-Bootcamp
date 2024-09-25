package com.example.albumartistapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.albumartistapi.model.Album;
import com.example.albumartistapi.model.Artist;

@Service
public class ArtistService {
    @Autowired
    private AlbumService albumService;

    private ArrayList<Artist> artists = new ArrayList<>();

    public ArtistService(AlbumService _albumService) {
        this.albumService = _albumService;
        Album album1 = albumService.getAlbumById(1);
        Album album2 = albumService.getAlbumById(2);
        Album album3 = albumService.getAlbumById(3);
        Album album4 = albumService.getAlbumById(4);
        Album album5 = albumService.getAlbumById(5);
        Album album6 = albumService.getAlbumById(6);
        Album album7 = albumService.getAlbumById(7);
        Album album8 = albumService.getAlbumById(8);
        Album album9 = albumService.getAlbumById(9);

        Artist artist1 = new Artist(1, "Artist One", new ArrayList<>(Arrays.asList(album1, album5, album7)));
        Artist artist2 = new Artist(2, "Artist Two", new ArrayList<>(Arrays.asList(album2, album3, album4)));
        Artist artist3 = new Artist(3, "Artist Three", new ArrayList<>(Arrays.asList(album6, album8, album9)));

        artists.addAll(Arrays.asList(artist1, artist2, artist3));
    }

    public Artist getArtistByIndex(int index) {
        if (index >= 0 && index < artists.size()) {
            return artists.get(index);
        }

        return null;
    }
}
