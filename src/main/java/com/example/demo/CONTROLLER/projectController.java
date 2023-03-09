package com.example.demo.CONTROLLER;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.MODEL.Model;

import com.example.demo.REPOSITORY.projectRepository;
import com.example.demo.SERVICE.projectService;
@RestController
@CrossOrigin
public class projectController {
@Autowired 
projectRepository Repo;
@Autowired
projectService pservice;

@GetMapping("/train")
List<Model> getList(){
	 return Repo.findAll();
}
@PostMapping("/train/post")
public Model create(@RequestBody Model model) {
	return Repo.save(model);
}
@PutMapping("/update")
public String update(@RequestBody Model model) {
	return pservice.updateModel(model);
}
@GetMapping("/train/{TrainNo}")
public Optional<Model>getbyid(@PathVariable int TrainNo){
	return pservice.gettaskModel(TrainNo);
}
@DeleteMapping("/delete/{TrainNo}")
public String del(@PathVariable int TrainNo)
{
	return pservice.deleteModel(TrainNo);
}
}
