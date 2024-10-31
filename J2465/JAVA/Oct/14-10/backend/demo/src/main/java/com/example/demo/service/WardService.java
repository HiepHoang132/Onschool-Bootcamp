package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Ward;
import com.example.demo.repository.WardRepository;

@Service
public class WardService {
    @Autowired
    private WardRepository wardRepository;

    public List<Ward> getAll() {
        return wardRepository.findAll();
    }

    public Optional<Ward> getWardById(long id) {
        return wardRepository.findById(id);
    }

    public Optional<Ward> getWardByName(String name) {
        return wardRepository.findByName(name);
    }

    public Ward save(Ward ward) {
        return wardRepository.save(ward);
    }

    public void deleteById(long id) {
        wardRepository.deleteById(id);
    }

    public void deleteAll() {
        wardRepository.deleteAll();
    }

}
