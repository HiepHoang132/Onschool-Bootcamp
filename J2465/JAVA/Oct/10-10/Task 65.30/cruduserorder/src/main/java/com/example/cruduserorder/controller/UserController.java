package com.example.cruduserorder.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.cruduserorder.model.User;
import com.example.cruduserorder.service.UserService;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user/all")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            return ResponseEntity.ok(userService.getAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/user/details/{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        try {
            Optional<User> userData = userService.getUserById(id);
            if (userData.isPresent()) {
                return ResponseEntity.ok(userData.get());
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/user/create")
    public ResponseEntity<Object> createUser(@RequestBody User userDetails) {
        try {
            Optional<User> userData = userService.getUserByEmail(userDetails.getEmail());
            if (userData.isPresent()) {
                return ResponseEntity.unprocessableEntity().body("User already exists");
            }

            userDetails.setCreatedAt(new Date());
            return ResponseEntity.status(HttpStatus.CREATED).body(userService.saveUser(userDetails));
        } catch (Exception e) {
            return ResponseEntity.unprocessableEntity()
                    .body("Failed to create specified User: " + e.getCause().getCause().getMessage());
        }
    }

    @PutMapping("/user/update/{id}")
    public ResponseEntity<Object> updateUser(@PathVariable long id, @RequestBody User userDetails) {
        Optional<User> userData = userService.getUserById(id);
        if (userData.isPresent()) {
            User updatedUser = userData.get();
            updatedUser.setFullName(userDetails.getFullName());
            updatedUser.setEmail(userDetails.getEmail());
            updatedUser.setPhone(userDetails.getPhone());
            updatedUser.setAddress(userDetails.getAddress());
            updatedUser.setUpdatedAt(new Date());

            try {
                return ResponseEntity.ok(userService.saveUser(updatedUser));
            } catch (Exception e) {
                return ResponseEntity.unprocessableEntity()
                        .body("Failed to update specified User: " + e.getCause().getCause().getMessage());
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable long id) {
        try {
            Optional<User> userData = userService.getUserById(id);
            if (userData.isPresent()) {
                userService.deleteUserById(id);
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping("/user/delete/all")
    public ResponseEntity<Void> deleteAllUsers() {
        try {
            userService.deleteAllUsers();
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
