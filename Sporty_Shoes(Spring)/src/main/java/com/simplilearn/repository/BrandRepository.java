package com.simplilearn.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.simplilearn.entity.Brand;


@Repository
public interface BrandRepository extends CrudRepository<Brand, Integer>{

  public List<Brand> findByBrandId(int brandId);
}
