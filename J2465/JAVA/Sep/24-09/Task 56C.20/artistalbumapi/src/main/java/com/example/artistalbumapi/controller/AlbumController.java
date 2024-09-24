package com.example.artistalbumapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.artistalbumapi.model.Album;
import com.example.artistalbumapi.service.AlbumService;

@RestController
public class AlbumController {

    @Autowired
    private AlbumService albumService;

    @GetMapping("/album-info")
    public Album getAlbum(@RequestParam String albumId) {
        return albumService.getAlbumById(albumId);
    }

}
