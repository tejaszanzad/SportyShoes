package com.simplilearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Brand;
import com.simplilearn.entity.BrandDTO;
import com.simplilearn.entity.Product;
import com.simplilearn.entity.ProductDTO;
import com.simplilearn.repository.BrandRepository;
import com.simplilearn.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
	ProductRepository productrepository;
    
    @Autowired
  	BrandRepository brandRepository;
    
    public List<Product> getAllProducts() {
		List<Product> products = new ArrayList<>();
		Iterable<Product> ps =  productrepository.findAll();
		ps.forEach((p) -> {
            System.out.println(p.getProductName());
            products.add(p);
        });
		return products;
	}
    
    public List<String> getProductByBrandName(String BrandName) {
		List<String> ProductNames = new ArrayList<>();
		List<Product> products = productrepository.findProductByBrandName(BrandName);

		if (products != null && products.size() > 0) {
			products.forEach(m -> ProductNames.add(m.getProductName()));
		}
		return ProductNames;	
	}
    
    public void saveProduct(ProductDTO productDTO) {
    	Product product = new Product();
    	product.setProductName(productDTO.getProductName());
    	product.setQty(productDTO.getQty());
    	product.setPrice(productDTO.getPrice());
    	
	List<Brand> listOfBrand = brandRepository.findByBrandId(productDTO.getBrandId());
		if(listOfBrand  != null && listOfBrand.size() > 0) {
    		product.setBrand(listOfBrand.get(0));
        };
     
		productrepository.save(product);
	}

	public void delete(int ProductId) {
		productrepository.deleteById(ProductId);
	}

	public int getProductId() {
		// TODO Auto-generated method stub
		return 0;
	}
	
	public Product updateProduct(ProductDTO productDTO) {
		List<Product> p = productrepository.findByProductId(productDTO.getProductId());
		if(p != null && p.size()>0) {
			Product pr = (p.get(0));
			pr.setProductName(productDTO.getProductName());
			pr.setPrice(productDTO.getPrice());
			pr.setQty(productDTO.getQty());
			List<Brand> b = brandRepository.findByBrandId(productDTO.getBrandId());
			if(b != null && b.size() > 0) {
				pr.setBrand(b.get(0));
			}
			productrepository.save(pr);
			return pr;
		}
		return null;
		
	}

}
