package com.example.rainbowapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.rainbowapi.service.RainbowService;

@RestController
public class RainbowController {
    @Autowired
    private RainbowService rainbowService;

    @GetMapping("/rainbow-request-query")
    public ArrayList<String> getRainbows(@RequestParam String filter) {
        return rainbowService.getRainbowsByFilter(filter);
    }

    @GetMapping("/rainbow-request-param/{index}")
    public String getRainbow(@PathVariable int index) {
        return rainbowService.getRainbowByIndex(index);
    }

}
