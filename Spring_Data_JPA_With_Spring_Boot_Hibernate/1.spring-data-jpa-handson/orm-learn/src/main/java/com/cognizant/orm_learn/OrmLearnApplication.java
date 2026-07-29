package com.cognizant.orm_learn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        countryService.addCountry(new Country("IN", "India"));
        countryService.addCountry(new Country("US", "United States"));
        countryService.addCountry(new Country("JP", "Japan"));

        System.out.println("Countries in Database:");

        for (Country country : countryService.getAllCountries()) {
            System.out.println(country.getCode() + " - " + country.getName());
        }
    }
}