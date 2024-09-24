package com.example.musicapi.model;

import java.util.List;

public class Artist extends Composer {
    private List<Album> albums;

    public Artist(String firstName, String lastName, String stageName, List<Album> albums) {
        super(firstName, lastName, stageName);
        this.albums = albums;
    }

    public List<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }

    @Override
    public String toString() {
        return String.format("Artist [%s, albums=%s]", super.toString(), albums);
    }

}
