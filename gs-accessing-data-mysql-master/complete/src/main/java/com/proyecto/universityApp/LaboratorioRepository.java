package com.proyecto.universityApp;

import org.springframework.data.repository.CrudRepository;

import com.proyecto.universityApp.Facultad;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface LaboratorioRepository extends CrudRepository<Laboratorio, Integer> {

}
