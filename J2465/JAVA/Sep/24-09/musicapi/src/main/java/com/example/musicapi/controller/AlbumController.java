package com.example.musicapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.musicapi.model.Album;
import com.example.musicapi.service.AlbumService;

@RestController
public class AlbumController {
    @Autowired
    private AlbumService albumService;

    @CrossOrigin
    @GetMapping("/albums")
    public ArrayList<Album> getAlbums() {
        return albumService.getAlbums();
    }

}
