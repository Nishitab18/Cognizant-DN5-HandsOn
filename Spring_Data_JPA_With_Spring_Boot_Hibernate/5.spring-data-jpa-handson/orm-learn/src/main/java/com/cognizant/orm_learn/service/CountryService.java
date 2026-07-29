package com.cognizant.orm_learn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    // Get all countries
    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    // Add a country
    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    // Find country by code
    public Country findCountryByCode(String code) {
        return countryRepository.findByCode(code).orElse(null);
    }

    // Update country
    public Country updateCountry(Country country) {
        return countryRepository.save(country);
    }

    // Delete country
    public void deleteCountry(String code) {
        countryRepository.deleteById(code);
    }

    // Search by partial name
    public List<Country> searchCountry(String text) {
        return countryRepository.findByNameContaining(text);
    }
}