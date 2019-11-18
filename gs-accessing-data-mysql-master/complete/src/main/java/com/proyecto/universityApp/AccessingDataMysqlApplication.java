package com.proyecto.universityApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.proyecto.labsApp.LabsController;
import com.proyecto.usersApp.UsersController;



@SpringBootApplication
@ComponentScan(basePackageClasses = UsersController.class)
@ComponentScan(basePackageClasses = UniversityController.class)
@ComponentScan(basePackageClasses = LabsController.class)
public class AccessingDataMysqlApplication {

    public static void main(String[] args) {
        SpringApplication.run(AccessingDataMysqlApplication.class, args);
    }
}
