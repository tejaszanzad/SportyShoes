import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productDetails: any =[];
  products: any =[];
  tempProducts: any =[];
  
  constructor(private productService:ProductServiceService){}

  getProduct() {
    this.productService.getProduct().subscribe(data=>{
     this.products=data;
     this.tempProducts = [...this.products];
      console.log(data)
     },error=>{})
 }

 filterProducts(brandIds:number[]){

  console.log("brandIds",brandIds)
  console.log("products",this.products)
  
  if(brandIds && brandIds.length > 0)
  this.tempProducts= this.products.filter((prod:any)=>brandIds.indexOf(prod.brand.brandId) !== -1)
  else
  this.tempProducts = this.products;
 }

 searchProductByName(e:any, productName : string){
  console.log(productName)
  if(e.keyCode === 13){
    if(productName.length > 0)
    this.tempProducts = this.products.filter((prod:any)=>prod.productName.toLowerCase().indexOf(productName.toLocaleLowerCase()) !== -1)
    else
    this.tempProducts = this.products;
  }
 }
 
 ngOnInit(): void {
  this.getProduct();
}


}
