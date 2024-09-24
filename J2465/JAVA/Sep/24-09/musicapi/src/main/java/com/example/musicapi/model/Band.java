package com.example.musicapi.model;

import java.util.List;

public class Band {
    private String bandName;
    private List<BandMember> members;
    private List<Album> albums;

    public Band(String bandName, List<BandMember> members, List<Album> albums) {
        this.bandName = bandName;
        this.members = members;
        this.albums = albums;
    }

    public String getBandName() {
        return bandName;
    }

    public void setBandName(String bandName) {
        this.bandName = bandName;
    }

    public List<BandMember> getMembers() {
        return members;
    }

    public void setMembers(List<BandMember> members) {
        this.members = members;
    }

    public List<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }

    @Override
    public String toString() {
        return "Band [bandName=" + bandName + ", members=" + members + ", albums=" + albums + "]";
    }

}
