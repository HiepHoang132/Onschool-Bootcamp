package com.example.countryregionapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.countryregionapi.model.Region;

@Service
public class RegionService {
    private ArrayList<Region> regions = new ArrayList<>();

    public RegionService() {
        // Regions for USA
        Region northeast = new Region("NE", "Northeast");
        Region southeast = new Region("SE", "Southeast");
        Region midwest = new Region("MW", "Midwest");

        // Regions for Canada
        Region ontario = new Region("ON", "Ontario");
        Region quebec = new Region("QC", "Quebec");

        // Regions for Australia
        Region newSouthWales = new Region("NSW", "New South Wales");
        Region victoria = new Region("VIC", "Victoria");
        Region queensland = new Region("QLD", "Queensland");

        regions.addAll(
                Arrays.asList(northeast, southeast, midwest, ontario, quebec, newSouthWales, victoria, queensland));
    }

    public Region getRegionByCode(String regionCode) {
        for (Region region : regions) {
            if (region.getRegionCode().equals(regionCode)) {
                return region;
            }
        }
        return null;
    }
}
