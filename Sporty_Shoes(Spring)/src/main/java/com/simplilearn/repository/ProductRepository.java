package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {

	@Query("select product from Product product left join Brand brand on product.brand.id = brand.id where brand.brandName = :brandName")
	public List<Product> findProductByBrandName(String brandName);

	public List<Product> findByProductId(int productId);
}
