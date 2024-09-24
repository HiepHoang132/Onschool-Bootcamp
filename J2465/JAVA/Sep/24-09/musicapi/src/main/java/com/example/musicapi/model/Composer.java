package com.example.musicapi.model;

public class Composer extends Person {
    private String stageName;

    public Composer(String firstName, String lastName, String stageName) {
        super(firstName, lastName);
        this.stageName = stageName;
    }

    public String getStageName() {
        return stageName;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }

    @Override
    public String toString() {
        return String.format("Composer [%s, stageName=%s]", super.toString(), stageName);
    }

}
