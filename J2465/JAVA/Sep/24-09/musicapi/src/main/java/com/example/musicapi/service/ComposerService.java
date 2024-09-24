package com.example.musicapi.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.musicapi.model.Album;
import com.example.musicapi.model.Artist;
import com.example.musicapi.model.Band;
import com.example.musicapi.model.BandMember;
import com.example.musicapi.model.Composer;

@Service
public class ComposerService {
    @Autowired
    private AlbumService albumService;

    private List<Composer> composers = new ArrayList<>();
    private List<Band> bands = new ArrayList<>();

    public ComposerService(AlbumService _albumService) {
        this.albumService = _albumService;
        initializeComposers();
        initializeBands();
    }

    private void initializeComposers() {
        Album album1 = albumService.getAlbumByName("Album1");
        Album album2 = albumService.getAlbumByName("Album2");
        Album album3 = albumService.getAlbumByName("Album3");
        Album album4 = albumService.getAlbumByName("Album4");
        Album album5 = albumService.getAlbumByName("Album5");
        Album album9 = albumService.getAlbumByName("Album9");
        Album album10 = albumService.getAlbumByName("Album10");

        Artist artist1 = new Artist("Dua", "Lipa", "Dua", Arrays.asList(album1, album3));
        composers.add(artist1);

        Artist artist2 = new Artist("Beyoncé", "Knowles", "Beyoncé", Arrays.asList(album2, album4));
        composers.add(artist2);

        Artist artist3 = new Artist("Ed", "Sheeran", "Ed", Arrays.asList(album5, album9, album10));
        composers.add(artist3);
    }

    private void initializeBands() {
        // Creating Band Members
        BandMember member1 = new BandMember("Mick", "Jagger", "Mick", "Vocals");
        BandMember member2 = new BandMember("John", "Lennon", "John", "Guitar");
        BandMember member3 = new BandMember("Freddie", "Mercury", "Freddie", "Vocals");
        BandMember member4 = new BandMember("Kurt", "Cobain", "Kurt", "Guitar");
        BandMember member5 = new BandMember("Robert", "Plant", "Robert", "Vocals");
        BandMember member6 = new BandMember("Amy", "Winehouse", "Amy", "Vocals");

        // Creating Bands
        List<BandMember> band1Members = Arrays.asList(member1, member2, member4);

        List<BandMember> band2Members = Arrays.asList(member3, member5, member6);

        Album album6 = albumService.getAlbumByName("Album6");
        Album album7 = albumService.getAlbumByName("Album7");
        Album album8 = albumService.getAlbumByName("Album8");

        Band band1 = new Band("The Rolling Stones", band1Members, Arrays.asList(album6, album7));
        bands.add(band1);

        Band band2 = new Band("Queen", band2Members, Arrays.asList(album8));
        bands.add(band2);
    }

    public ArrayList<Band> getBands() {
        return new ArrayList<>(bands);
    }

    public ArrayList<Artist> getArtists() {
        ArrayList<Artist> artists = new ArrayList<>();

        for (Composer composer : composers) {
            if (composer instanceof Artist artist) {
                artists.add(artist);
            }
        }

        return artists;
    }
}
