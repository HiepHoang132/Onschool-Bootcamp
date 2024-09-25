package com.example.countryregionapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.countryregionapi.model.Region;

@Service
public class RegionService {
    private ArrayList<Region> regions = new ArrayList<>();

    public RegionService() {
        Region region1 = new Region("CA", "California");
        Region region2 = new Region("TX", "Texas");

        Region region3 = new Region("ON", "Ontario");
        Region region4 = new Region("BC", "British Columbia");

        Region region5 = new Region("ENG", "England");
        Region region6 = new Region("SCT", "Scotland");

        Region region7 = new Region("KYO", "Kyoto");
        Region region8 = new Region("OSK", "Osaka");

        Region region9 = new Region("NSW", "New South Wales");
        Region region10 = new Region("QLD", "Queensland");

        Region region11 = new Region("BW", "Baden-Württemberg");
        Region region12 = new Region("BY", "Bavaria");

        regions.addAll(Arrays.asList(region1, region2, region3, region4, region5, region6, region7, region8, region9,
                region10, region11, region12));
    }

    public Region getRegionByCode(String code) {
        for (Region region : regions) {
            if (region.getRegionCode().equalsIgnoreCase(code)) {
                return region;
            }
        }
        return null;
    }
}
