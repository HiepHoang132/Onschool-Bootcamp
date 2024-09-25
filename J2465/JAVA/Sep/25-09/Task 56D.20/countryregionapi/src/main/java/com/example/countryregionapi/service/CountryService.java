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

        Region region1 = regionService.getRegionByCode("CA");
        Region region2 = regionService.getRegionByCode("TX");
        Region region3 = regionService.getRegionByCode("ON");
        Region region4 = regionService.getRegionByCode("BC");
        Region region5 = regionService.getRegionByCode("ENG");
        Region region6 = regionService.getRegionByCode("SCT");
        Region region7 = regionService.getRegionByCode("KYO");
        Region region8 = regionService.getRegionByCode("OSK");
        Region region9 = regionService.getRegionByCode("NSW");
        Region region10 = regionService.getRegionByCode("QLD");
        Region region11 = regionService.getRegionByCode("BW");
        Region region12 = regionService.getRegionByCode("BY");

        Country usa = new Country("US", "United States", new ArrayList<>(Arrays.asList(region1, region2)));
        Country canada = new Country("CA", "Canada", new ArrayList<>(Arrays.asList(region3, region4)));
        Country uk = new Country("UK", "United Kingdom", new ArrayList<>(Arrays.asList(region5, region6)));
        Country japan = new Country("JP", "Japan", new ArrayList<>(Arrays.asList(region7, region8)));
        Country australia = new Country("AU", "Australia", new ArrayList<>(Arrays.asList(region9, region10)));
        Country germany = new Country("DE", "Germany", new ArrayList<>(Arrays.asList(region11, region12)));

        countries.addAll(Arrays.asList(usa, canada, uk, japan, australia, germany));
    }

    public Country getCountryByIndex(int index) {
        if (index >= 0 && index < countries.size()) {
            return countries.get(index);
        }
        return null;
    }
}
