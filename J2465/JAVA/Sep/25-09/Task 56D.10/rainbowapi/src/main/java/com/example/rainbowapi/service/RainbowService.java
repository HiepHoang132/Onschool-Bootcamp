package com.example.rainbowapi.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service
public class RainbowService {
    private String[] rainbows = { "red", "orange", "yellow", "green", "blue", "indigo", "violet" };

    public ArrayList<String> getRainbowsByFilter(String filter) {
        ArrayList<String> result = new ArrayList<>();

        for (String rainbow : rainbows) {
            if (rainbow.contains(filter)) {
                result.add(rainbow);
            }
        }

        return result;
    }

    public String getRainbowByIndex(int index) {
        if (index >= 0 && index < rainbows.length) {
            return rainbows[index];
        }
        return "";
    }
}
