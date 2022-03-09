package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.Table;

@Entity
//@Table(name="student")

public class Student {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	//@Column(name="name")
	private String name;
	private String meals;
	private String gender;
	private int weight;
	

	public Student() 
	{
		// TODO Auto-generated constructor stub
	}

    public Student(int id, String name, String meals, String gender, int weight) {
		super();
		this.id = id;
		this.name = name;
		this.meals = meals;
		this.gender = gender;
		this.weight = weight;
	}

	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getMeals() {
		return meals;
	}


	public void setMeals(String meals) {
		this.meals = meals;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public int getWeight() {
		return weight;
	}


	public void setWeight(int weight) {
		this.weight = weight;
	}

}
