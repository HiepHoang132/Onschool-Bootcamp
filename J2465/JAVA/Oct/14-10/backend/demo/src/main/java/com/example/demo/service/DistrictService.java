package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.District;
import com.example.demo.repository.DistrictRepository;

@Service
public class DistrictService {
    @Autowired
    private DistrictRepository districtRepository;

    public List<District> getAll() {
        return districtRepository.findAll();
    }

    public Optional<District> getDistrictById(long id) {
        return districtRepository.findById(id);
    }

    public Optional<District> getDistrictByName(String name) {
        return districtRepository.findByName(name);
    }

    public District save(District District) {
        return districtRepository.save(District);
    }

    public void deleteById(long id) {
        districtRepository.deleteById(id);
    }

    public void deleteAll() {
        districtRepository.deleteAll();
    }
}
