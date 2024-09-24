package com.example.countryregionapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.countryregionapi.model.Region;
import com.example.countryregionapi.service.RegionService;

@RestController
public class RegionController {

    @Autowired
    private RegionService regionService;

    @CrossOrigin
    @GetMapping("/region-info")
    public Region getRegion(@RequestParam String regionCode) {
        return regionService.getRegionByCode(regionCode);
    }

}
