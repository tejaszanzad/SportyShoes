package com.simplilearn.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.entity.Brand;
import com.simplilearn.entity.BrandDTO;
import com.simplilearn.repository.BrandRepository;

@Service
public class BrandService {

	@Autowired
	BrandRepository brandrepository;
	
	public List<Brand> getAllBrands() {
		List<Brand> brands = new ArrayList<>();
		 Iterable<Brand> brs = brandrepository.findAll();
		 brs.forEach((br) -> {
	            System.out.println(br.getBrandName());
	            brands.add(br);
	        });
		return brands;
	}

	public void delete(int BrandId) {
		brandrepository.deleteById(BrandId);
	}

	public int getBrandId() {
		// TODO Auto-generated method stub
		return 0;
	}

	public void saveBrand(BrandDTO brandDTO) {
		Brand brand = new Brand();
		brand.setBrandId(brandDTO.getBrandId());
		brand.setBrandName(brandDTO.getBrandName());
     
		brandrepository.save(brand);
		
	}
 
	public Brand updateBrand(BrandDTO brandDTO) {
		List<Brand> b = brandrepository.findByBrandId(brandDTO.getBrandId());
		if(b != null && b.size()>0) {
			Brand br = (b.get(0));
			br.setBrandName(brandDTO.getBrandName());
			brandrepository.save(br);
			return br;
		}
		return null;
		}
	
}
