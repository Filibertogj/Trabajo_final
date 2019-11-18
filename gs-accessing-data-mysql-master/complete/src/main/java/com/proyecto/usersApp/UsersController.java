package com.proyecto.usersApp;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
@Controller
@RequestMapping(path="/users")
public class UsersController {
	
    String url = "jdbc:postgresql://localhost:5433/users";
    String user = "postgres";
    String password = "123456";

	@GetMapping(path="/all")
	public @ResponseBody String getAllUsers() {
		JSONArray ja = new JSONArray();
		ArrayList array = new ArrayList();
		try (Connection con = DriverManager.getConnection(url, user, password);
				 PreparedStatement pst = con.prepareStatement("SELECT * FROM usuarios");
                ResultSet rs = pst.executeQuery()) {
			
            while (rs.next()) {
            	JSONObject jo = new JSONObject();
            	try {
            		jo.put("id", rs.getInt(1));
					jo.put("nombre", rs.getString(2));
					jo.put("apellido", rs.getString(3));
	        		jo.put("tipo", rs.getString(5));
	        		array.add(jo);
				} catch (JSONException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
            }
            
        } catch (SQLException ex) {
        
            Logger lgr = Logger.getLogger(UsersController.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("users", array);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jo.toString();
	}
	
	@GetMapping(path="/delete")
	public @ResponseBody String deleteUsers(@RequestParam int id) {
		JSONArray ja = new JSONArray();
		ArrayList array = new ArrayList();
		String SQL = "DELETE FROM usuarios WHERE id = ?";
		int affectedrows = 0;
		try (Connection con = DriverManager.getConnection(url, user, password);
				 PreparedStatement pst = con.prepareStatement(SQL))
		{
				 pst.setInt(1, id);
				 affectedrows = pst.executeUpdate();
        } catch (SQLException ex) {
        
            Logger lgr = Logger.getLogger(UsersController.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("data", affectedrows);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	@GetMapping(path="/add")
	public @ResponseBody String addUsers(@RequestParam String nombre, @RequestParam String apellido, 
			@RequestParam String password, @RequestParam String tipo) {
		JSONArray ja = new JSONArray();
		ArrayList array = new ArrayList();
		User users = new User();
		String query = "INSERT INTO usuarios(id, nombre, apellido, pass, tipo) VALUES(?, ?, ?, ?,?)";
		int affectedrows = 0;
		
		try (Connection con = DriverManager.getConnection(url, user, password);
				 PreparedStatement pst = con.prepareStatement(query))
		{
				pst.setInt(1, getRandomNumberInRange(0, 1000000000));
				pst.setString(2, nombre);
				pst.setString(3, apellido);
				pst.setString(4, password);
				pst.setString(5, tipo);
				affectedrows =pst.executeUpdate();
              
            
        } catch (SQLException ex) {
        
            Logger lgr = Logger.getLogger(UsersController.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("data", affectedrows);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	@GetMapping(path="/getone")
	public @ResponseBody String getUser(@RequestParam int id) {
		JSONArray ja = new JSONArray();
		ArrayList array = new ArrayList();
		User users = new User();
		String query = "SELECT * FROM usuarios where id = ?";
		
		try (Connection con = DriverManager.getConnection(url, user, password);
				 PreparedStatement pst = con.prepareStatement(query))
		{
				pst.setInt(1, id);
				ResultSet rs = pst.executeQuery();
		        while (rs.next()) {
	            	JSONObject jo = new JSONObject();
	            	try {
	            		jo.put("id", rs.getInt(1));
						jo.put("nombre", rs.getString(2));
						jo.put("apellido", rs.getString(3));
		        		jo.put("tipo", rs.getString(5));
		        		array.add(jo);
					} catch (JSONException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	            	
	    
	            }
              
            
        } catch (SQLException ex) {
        
            Logger lgr = Logger.getLogger(UsersController.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("data", array);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	public String login(String usuario, String passw) {
		JSONArray ja = new JSONArray();
		ArrayList array = new ArrayList();
		User users = new User();
		String query = "SELECT * FROM usuarios where nombre = ? and pass = ?";
		
		try (Connection con = DriverManager.getConnection(url, user, password);
				 PreparedStatement pst = con.prepareStatement(query))
		{
				pst.setString(1, usuario);
				pst.setString(2, passw);
				ResultSet rs = pst.executeQuery();
		        while (rs.next()) {
	            	JSONObject jo = new JSONObject();
	            	try {
	            		jo.put("id", rs.getInt(1));
						jo.put("nombre", rs.getString(2));
						jo.put("apellido", rs.getString(3));
		        		jo.put("tipo", rs.getString(5));
		        		array.add(jo);
					} catch (JSONException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
	            	
	    
	            }
              
            
        } catch (SQLException ex) {
        
            Logger lgr = Logger.getLogger(UsersController.class.getName());
            lgr.log(Level.SEVERE, ex.getMessage(), ex);
        }
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("data", array);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	public int getRandomNumberInRange(int min, int max) {
		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}
}
