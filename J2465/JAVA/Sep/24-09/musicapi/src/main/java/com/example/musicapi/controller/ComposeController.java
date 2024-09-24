package com.example.musicapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.musicapi.model.Artist;
import com.example.musicapi.model.Band;
import com.example.musicapi.service.ComposerService;

@RestController
public class ComposeController {
    @Autowired
    private ComposerService composerService;

    @CrossOrigin
    @GetMapping("/bands")
    public ArrayList<Band> getBands() {
        return composerService.getBands();
    }

    @GetMapping("/artists")
    public ArrayList<Artist> getArtists() {
        return composerService.getArtists();
    }

}
