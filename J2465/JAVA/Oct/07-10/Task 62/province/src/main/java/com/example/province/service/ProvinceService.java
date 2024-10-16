package com.example.province.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.province.model.Province;
import com.example.province.repository.ProvinceRepository;

@Service
public class ProvinceService {
    @Autowired
    ProvinceRepository provinceRepository;

    public List<Province> getAll() {
        ArrayList<Province> provinces = new ArrayList<>();
        provinceRepository.findAll().forEach(provinces::add);
        return provinces;
    }

    public Province getProvinceById(long id) {
        return provinceRepository.findById(id);
    }
}
