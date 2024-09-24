package com.example.musicapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.musicapi.model.Album;

@Service
public class AlbumService {
        private ArrayList<Album> albums = new ArrayList<>();

        public AlbumService() {
                initializeAlbums();
        }

        private void initializeAlbums() {
                albums.add(new Album("Album1",
                                Arrays.asList("Beat It", "Billie Jean", "Thriller", "Human Nature",
                                                "P.Y.T. (Pretty Young Thing)")));
                albums.add(new Album("Album2", Arrays.asList("Hells Bells", "Shoot to Thrill", "Back in Black",
                                "You Shook Me All Night Long", "Rock and Roll Ain't Noise Pollution")));
                albums.add(new Album("Album3",
                                Arrays.asList("Speak to Me", "Time", "Money", "Us and Them", "Brain Damage")));
                albums.add(new Album("Album4",
                                Arrays.asList("Go Your Own Way", "Dreams", "Don't Stop", "You Make Loving Fun",
                                                "The Chain")));
                albums.add(new Album("Album5", Arrays.asList("Come Together", "Something", "Here Comes the Sun",
                                "Octopus's Garden", "Carry That Weight")));
                albums.add(new Album("Album6", Arrays.asList("In the Flesh", "Another Brick in the Wall, Part 2",
                                "Comfortably Numb", "Hey You", "Run Like Hell")));
                albums.add(new Album("Album7", Arrays.asList("Hotel California", "New Kid in Town",
                                "Life in the Fast Lane", "Wasted Time", "Victim of Love")));
                albums.add(new Album("Album8", Arrays.asList("Black Dog", "Rock and Roll", "Stairway to Heaven",
                                "Misty Mountain Hop", "Going to California")));
                albums.add(new Album("Album9",
                                Arrays.asList("Rolling in the Deep", "Someone Like You", "Set Fire to the Rain",
                                                "Turning Tables", "Rumour Has It")));
                albums.add(new Album("Album10",
                                Arrays.asList("Hello", "When We Were Young", "Send My Love (To Your New Lover)",
                                                "I Miss You", "Water Under the Bridge")));
        }

        public ArrayList<Album> getAlbums() {
                return albums;
        }

        public Album getAlbumByName(String albumName) {
                for (Album album : albums) {
                        if (album.getName().equals(albumName)) {
                                return album;
                        }
                }
                return null;
        }

}
