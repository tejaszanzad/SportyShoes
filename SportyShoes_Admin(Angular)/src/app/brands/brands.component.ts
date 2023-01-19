import { Component, OnInit } from '@angular/core';
import { BrandServiceService } from '../brand-service.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  
  brands:any=[];
  selectedBrandId:number =0;
  constructor(private brand:BrandServiceService){}
  
  getBrands(){
    this.brand.getBrand().subscribe(data=>{

      this.brands=[...data];
      console.log(data)
     },error=>{}) 
  }

  ngOnInit(): void {
   this.getBrands();
  }
  
  edit(x:number){
    console.log(x)
    this.selectedBrandId =x;
  }

  update(brandId:number,brandName:string){
    this.brand.updateBrand({brandName:brandName,brandId:brandId}).subscribe(data=>{
      this.getBrands();
      console.log(data)
      this.selectedBrandId = 0;
     },error=>{})
  }
  
  deleteBrand(brandId:number){
    console.log(brandId)
    var retVal = confirm("Are you sure you want to delete?");
    if(retVal){
    this.brand.deleteBrand(brandId).subscribe(data=>{
      this.getBrands();
     },error=>{}) 
    }
  }

}
