package com.example.province.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.province.model.District;
import com.example.province.repository.DistrictRepository;

@Service
public class DistrictService {
    @Autowired
    DistrictRepository districtRepository;

    public District getDistrictById(long id) {
        return districtRepository.findById(id);
    }
}
