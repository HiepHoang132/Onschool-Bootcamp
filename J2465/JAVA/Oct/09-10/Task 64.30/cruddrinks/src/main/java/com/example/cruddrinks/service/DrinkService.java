package com.example.cruddrinks.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.cruddrinks.model.Drink;
import com.example.cruddrinks.repository.DrinkRepository;

@Service
public class DrinkService {
    @Autowired
    private DrinkRepository drinkRepository;

    public List<Drink> getAll() {
        return drinkRepository.findAll();
    }

    public Optional<Drink> getDrinkById(long id) {
        return drinkRepository.findById(id);
    }

    public Optional<Drink> getDrinkByMaNuocUong(String maNuocUong) {
        return drinkRepository.findByMaNuocUong(maNuocUong);
    }

    public boolean existsById(long id) {
        if (drinkRepository.existsById(id)) {
            return true;
        }
        return false;
    }

    public Drink saveDrink(Drink drink) {
        return drinkRepository.save(drink);
    }

    public void deleteDrinkById(long id) {
        drinkRepository.deleteById(id);
    }

    public void deleteAllDrinks() {
        drinkRepository.deleteAll();
    }
}
