package com.cognizant.orm_learn;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.cognizant.orm_learn.model.Department;
import com.cognizant.orm_learn.service.DepartmentService;

@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {

    @Autowired
    private DepartmentService departmentService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        testGetDepartment();
    }

    private void testGetDepartment() {
        Department department = departmentService.getDepartment(1);

        if (department != null) {
            System.out.println(department);
            System.out.println(department.getEmployeeList());
        } else {
            System.out.println("Department not found");
        }
    }
}