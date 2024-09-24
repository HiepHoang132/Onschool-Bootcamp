package com.example.musicapi.model;

public class BandMember extends Composer {
    private String instrument;

    public BandMember(String firstName, String lastName, String stageName, String instrument) {
        super(firstName, lastName, stageName);
        this.instrument = instrument;
    }

    public String getInstrument() {
        return instrument;
    }

    public void setInstrument(String instrument) {
        this.instrument = instrument;
    }

    @Override
    public String toString() {
        return String.format("BandMember [%s, instrument=%s]", super.toString(), instrument);
    }

}
