package com.capstone.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer> {


	List<Student> findByName(String name);


}
