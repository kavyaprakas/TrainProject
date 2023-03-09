package com.example.demo.MODEL;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Model {
	@Id
	private int TrainNo;
	private String Time;
	//@Coloumn (name="From")
	private String From_Station;
	private String To_Station;
	private Double Price;
	public Model(int trainNo, String time, String from_Station, String to_Station, Double price) {
		super();
		TrainNo = trainNo;
		Time = time;
		From_Station = from_Station;
		To_Station = to_Station;
		Price = price;
	}
	public Model() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getTrainNo() {
		return TrainNo;
	}
	public void setTrainNo(int trainNo) {
		TrainNo = trainNo;
	}
	public String getTime() {
		return Time;
	}
	public void setTime(String time) {
		Time = time;
	}
	public String getFrom_Station() {
		return From_Station;
	}
	public void setFrom_Station(String from_Station) {
		From_Station = from_Station;
	}
	public String getTo_Station() {
		return To_Station;
	}
	public void setTo_Station(String to_Station) {
		To_Station = to_Station;
	}
	public Double getPrice() {
		return Price;
	}
	public void setPrice(Double price) {
		Price = price;
	}
	
	
}
