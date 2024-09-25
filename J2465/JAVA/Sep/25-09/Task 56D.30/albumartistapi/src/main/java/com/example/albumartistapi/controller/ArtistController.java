package com.example.albumartistapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.albumartistapi.model.Artist;
import com.example.albumartistapi.service.ArtistService;

@RestController
@CrossOrigin
public class ArtistController {
    @Autowired
    private ArtistService artistService;

    @GetMapping("/artists/{index}")
    public Artist getArtist(@PathVariable int index) {
        return artistService.getArtistByIndex(index);
    }

}
