package com.example.countryregionapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.countryregionapi.model.Country;
import com.example.countryregionapi.model.Region;

@Service
public class CountryService {

    @Autowired
    private RegionService regionService;

    private ArrayList<Country> countries = new ArrayList<>();

    public CountryService(RegionService _regionService) {
        this.regionService = _regionService;

        // Regions for USA
        Region northeast = regionService.getRegionByCode("NE");
        Region southeast = regionService.getRegionByCode("SE");
        Region midwest = regionService.getRegionByCode("MW");

        // Regions for Canada
        Region ontario = regionService.getRegionByCode("ON");
        Region quebec = regionService.getRegionByCode("QC");

        // Regions for Australia
        Region newSouthWales = regionService.getRegionByCode("NSW");
        Region victoria = regionService.getRegionByCode("VIC");
        Region queensland = regionService.getRegionByCode("QLD");

        Country country1 = new Country("US", "United States",
                new ArrayList<>(Arrays.asList(northeast, southeast, midwest)));
        Country country2 = new Country("CA", "Canada",
                new ArrayList<>(Arrays.asList(ontario, quebec)));
        Country country3 = new Country("AU", "Australia",
                new ArrayList<>(Arrays.asList(newSouthWales, victoria, queensland)));

        countries.addAll(Arrays.asList(country1, country2, country3));
    }

    public ArrayList<Country> getAllCountries() {
        return countries;
    }

    public Country getCountryByCode(String countryCode) {
        for (Country country : countries) {
            if (country.getCountryCode().equals(countryCode)) {
                return country;
            }
        }
        return null;
    }
}
