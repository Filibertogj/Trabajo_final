package com.proyecto.labsApp;

import java.util.ArrayList;
import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.net.UnknownHostException;

import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoClient;
import com.mongodb.WriteResult;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.proyecto.usersApp.UsersController;

@RestController
@RequestMapping(path="/labs")
public class LabsController {

	Mongo mongo = new Mongo();
	DB db = mongo.getDB("laboratorios");
	DBCollection coll= db.getCollection("labs");
	UsersController user = new UsersController();
	
	@GetMapping(path="/login")
	public @ResponseBody String login(@RequestParam String nombre, @RequestParam String pass) {
		return user.login(nombre, pass);
	}
	
	@GetMapping(path="/solicitarSala")
	public @ResponseBody String solicitarSala(@RequestParam String nombre, @RequestParam String laboratorio, @RequestParam String fecha) {
		BasicDBObject doc1 = new BasicDBObject();
		doc1.put("idsolicitud", user.getRandomNumberInRange(0, 1000000000));
		doc1.put("usuario", nombre);
		doc1.put("laboratorio", laboratorio);
		doc1.put("fecha", fecha);
		doc1.put("aprobacion", "");
		coll.insert(doc1);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("data", true);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	
	@GetMapping(path="/all")
	public @ResponseBody String listLabs() {
		BasicDBObject query = new BasicDBObject();
		DBCursor cursor = coll.find();		
		ArrayList array = new ArrayList();
		while (cursor.hasNext()) {
			array.add(cursor.next());
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
	
	@GetMapping(path="/getOne")
	public @ResponseBody String getOne(@RequestParam String id) {
		BasicDBObject whereQuery = new BasicDBObject();
		whereQuery.put("idsolicitud", id);
		DBCursor cursor = coll.find(whereQuery);
		ArrayList array = new ArrayList();
		//while (cursor.) {
			array.add(cursor.one());
		//}
		
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
	
	@GetMapping(path="/aprobarDenegar")
	public @ResponseBody String aprobarDenegar(@RequestParam int solicitud ,@RequestParam Boolean aprobarDenegar) {
		BasicDBObject newDocument = new BasicDBObject();
		newDocument.append("$set", new BasicDBObject().append("aprobacion", aprobarDenegar));
		BasicDBObject searchQuery = new BasicDBObject().append("idsolicitud", solicitud);

		coll.update(searchQuery, newDocument);
		JSONObject jo = new JSONObject();
		try {
			jo.put("ok", 200);
			jo.put("data", true);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jo.toString();
	}
	@GetMapping(path="/calendario")
	public @ResponseBody String calendario() {
		DBCollection coll= db.getCollection("calendario");
		BasicDBObject query = new BasicDBObject();
		DBCursor cursor = coll.find();		
		ArrayList array = new ArrayList();
		while (cursor.hasNext()) {
			array.add(cursor.next());
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
}
