package com.simplilearn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.entity.Brand;
import com.simplilearn.entity.BrandDTO;
import com.simplilearn.service.BrandService;

@RestController
public class BrandController {
	
	@Autowired
	BrandService brandservice;
	
	@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/brands")
	public List<Brand> getAllBrands() {
		return brandservice.getAllBrands();
	}
    
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/brands")
	public int saveBrand(@RequestBody BrandDTO brandDTO) {
		brandservice.saveBrand(brandDTO);
		return brandservice.getBrandId();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/brands")
	public Brand updateBrand(@RequestBody BrandDTO brandDTO) {
		return brandservice.updateBrand(brandDTO);
	
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/brands/{BrandId}")
	public void deleteBrand(@PathVariable("BrandId") Integer BrandId) {
		brandservice.delete(BrandId);
	}

}
