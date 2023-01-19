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

import com.simplilearn.entity.Product;
import com.simplilearn.entity.ProductDTO;
import com.simplilearn.service.ProductService;

@RestController
public class ProductController {

  @Autowired
  ProductService productservice;
  
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/products")
	public List<Product> getAllProducts() {
		return productservice.getAllProducts();
	}

  @CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/products")
	public int saveProduct(@RequestBody ProductDTO productDTO) {
		productservice.saveProduct(productDTO);
		return productservice.getProductId();
	} 
	
  @CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/products")
	public Product updateProduct(@RequestBody ProductDTO productDTO) {
		return productservice.updateProduct(productDTO);
	}
	
  @CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/products/{ProductId}")
	public void deleteProduct(@PathVariable("ProductId") Integer ProductId) {
		productservice.delete(ProductId);
	}
	
  @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/products/brand/{name}")
	public List<String> getProductsByBrandName(@PathVariable("name") String name) {
		return productservice.getProductByBrandName(name);
	}
   
}
