package com.example.dailycampaign.controller;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DailyCampaign {

    @CrossOrigin
    @GetMapping("/campaigns")
    public String getDateViet(@RequestParam(value = "username", defaultValue = "Pizza Lover") String name) {
        DateTimeFormatter dtfVietnam = DateTimeFormatter.ofPattern("EEEE").localizedBy(Locale.forLanguageTag("vi"));
        LocalDate today = LocalDate.now(ZoneId.systemDefault());
        return String.format("Hello %s ! Hôm nay %s, mua 1 tặng 1.", name, dtfVietnam.format(today));
    }

}
