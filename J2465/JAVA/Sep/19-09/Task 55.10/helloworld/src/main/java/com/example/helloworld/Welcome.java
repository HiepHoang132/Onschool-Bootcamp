package com.example.helloworld;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Welcome {
    
    @CrossOrigin
    @GetMapping("/hello")
    public String getHelloWorld() {
        DateFormat dateFormat = new SimpleDateFormat("hh:mm a");
        Date date = new Date();
        return String.format("Hi Hiep! It's %s", dateFormat.format(date));
    }

}
