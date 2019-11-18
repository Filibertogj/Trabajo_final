package com.proyecto.universityApp;

import java.util.ArrayList;
import java.util.Optional;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//request mapping es el path general 
@Controller
@RequestMapping(path="/university")
public class UniversityController {
	//este metodo sirve para que angular pueda consumir los servicios de spring
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
            }
        };
    }

	@Autowired 
	private FacultadRepository facultadRepository;

	@GetMapping(path="/Facultad/add") // Map ONLY POST Requests
	public @ResponseBody String addFacultad (@RequestParam String name
			, @RequestParam String description) {
		Facultad f = new Facultad();
		f.setName(name);
		f.setDescription(description);
		facultadRepository.save(f);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}

	@GetMapping(path="/Facultad/all")
	public @ResponseBody Iterable<Facultad> getAllFacults() 
	
	{
		// This returns a JSON or XML with the users
		return facultadRepository.findAll();
	}
	
	@GetMapping(path="/Facultad/delete")
	public @ResponseBody String deleteFacults(@RequestParam int id ) 
	
	{
		Facultad f = facultadRepository.findById(id)
				.orElseThrow(() -> null);
		facultadRepository.delete(f);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	@GetMapping(path="/Facultad/getOne")
	public @ResponseBody String getOneFacults(@RequestParam int id ) 
	
	{
		Facultad f = facultadRepository.findById(id)
				.orElseThrow(() -> null);
		JSONObject jo = new JSONObject();
		try {
			jo.put("id", f.getId());
			jo.put("nombre", f.getName());
			jo.put("descripcion", f.getDescription());
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@Autowired 
	private BloqueRepository bloqueRepository;
	
	@GetMapping(path="/Bloque/add")
	public @ResponseBody String addBloque (@RequestParam String name
			, @RequestParam String description) {
		Bloque b = new Bloque();
		b.setName(name);
		b.setDescription(description);
		bloqueRepository.save(b);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	@GetMapping(path="/Bloque/all")
	public @ResponseBody Iterable<Bloque> getAllBloque() 
	
	{
		// This returns a JSON or XML with the users
		return bloqueRepository.findAll();
	}
	
	@GetMapping(path="/Bloque/delete")
	public @ResponseBody String deleteBloque(@RequestParam int id ) 
	
	{
		Bloque b = bloqueRepository.findById(id)
				.orElseThrow(() -> null);
		bloqueRepository.delete(b);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	
	@GetMapping(path="/Bloque/getOne")
	public @ResponseBody String getOneBloque(@RequestParam int id ) 
	
	{
		Bloque b = bloqueRepository.findById(id)
				.orElseThrow(() -> null);
		JSONObject jo = new JSONObject();
		try {
			jo.put("id", b.getId());
			jo.put("nombre", b.getName());
			jo.put("descripcion", b.getDescription());
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@Autowired 
	private LaboratorioRepository laboratorioRepository;
	
	@GetMapping(path="/Laboratorio/add")
	public @ResponseBody String addLaboratorio (@RequestParam String name
			, @RequestParam String description) {
		Laboratorio l = new Laboratorio();
		l.setName(name);
		l.setDescription(description);
		laboratorioRepository.save(l);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	@GetMapping(path="/Laboratorio/all")
	public @ResponseBody Iterable<Laboratorio> getAllLaboratorio() 
	
	{
		// This returns a JSON or XML with the users
		return laboratorioRepository.findAll();
	}
	
	@GetMapping(path="/Laboratorio/delete")
	public @ResponseBody String deleteLaboratorio(@RequestParam int id ) 
	
	{
		Laboratorio l = laboratorioRepository.findById(id)
				.orElseThrow(() -> null);
		laboratorioRepository.delete(l);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	
	@GetMapping(path="/Laboratorio/getOne")
	public @ResponseBody String getOneLaboratorio(@RequestParam int id ) 
	
	{
		Laboratorio l = laboratorioRepository.findById(id)
				.orElseThrow(() -> null);
		JSONObject jo = new JSONObject();
		try {
			jo.put("id", l.getId());
			jo.put("nombre", l.getName());
			jo.put("descripcion", l.getDescription());
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jo.toString();
	}	
}
