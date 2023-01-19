package com.simplilearn.controller;

import java.util.ArrayList;
import java.util.List;

public class Test {
	
	public class Employee{
		private String name;
		private Integer age;
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public Integer getAge() {
			return age;
		}
		public void setAge(Integer age) {
			this.age = age;
		}
		
	}
	
	public static void main(String[] args) {
		
		List<Employee> l = new ArrayList<Employee>();
		
	     Employee emp = l.get(0);
		
	}

}
