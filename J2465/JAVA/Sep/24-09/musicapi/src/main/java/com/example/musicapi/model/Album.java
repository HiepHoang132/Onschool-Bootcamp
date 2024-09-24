package com.example.musicapi.model;

import java.util.List;

public class Album {
    private String name;
    private List<String> songs;

    public Album(String name, List<String> songs) {
        this.name = name;
        this.songs = songs;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getSongs() {
        return songs;
    }

    public void setSongs(List<String> songs) {
        this.songs = songs;
    }

    @Override
    public String toString() {
        return "Album [name=" + name + ", songs=" + songs + "]";
    }

}
