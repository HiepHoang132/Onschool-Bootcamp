package com.example.artistalbumapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.artistalbumapi.model.Artist;
import com.example.artistalbumapi.service.ArtistService;

@RestController
public class ArtistController {

    @Autowired
    private ArtistService artistService;

    @GetMapping("/artists")
    public ArrayList<Artist> getArtists() {
        return artistService.getArtists();
    }

    @GetMapping("/artist-info")
    public Artist getArtists(@RequestParam String artistId) {
        return artistService.getArtistById(artistId);
    }

}
