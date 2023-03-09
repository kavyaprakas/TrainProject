package com.example.demo.SERVICE;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.MODEL.Model;
import com.example.demo.REPOSITORY.projectRepository;

@Service
public class projectService {
	@Autowired
	projectRepository repo;

	public Optional<Model> gettaskModel(int TrainNo){
		return repo.findById(TrainNo);
	}
	public String updateModel(Model model) {
		repo.save(model);
		return "updated";
	}
	public String deleteModel(int TrainNo) {
		repo.deleteById(TrainNo);
		return "Deleted";
	}
}
