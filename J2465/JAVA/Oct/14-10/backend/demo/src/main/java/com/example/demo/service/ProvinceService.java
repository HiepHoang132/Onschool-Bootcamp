package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Province;
import com.example.demo.repository.ProvinceRepository;

@Service
public class ProvinceService {
    @Autowired
    private ProvinceRepository provinceRepository;

    public List<Province> getAll() {
        return provinceRepository.findAll();
    }

    public Optional<Province> getProvinceById(long id) {
        return provinceRepository.findById(id);
    }

    public Optional<Province> getProvinceByCode(String code) {
        return provinceRepository.findByCode(code);
    }


    public Province save(Province province) {
        return provinceRepository.save(province);
    }

    public void deleteById(long id) {
        provinceRepository.deleteById(id);
    }

    public void deleteAll() {
        provinceRepository.deleteAll();
    }
}
