import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { BrandServiceService } from 'src/app/brand-service.service';
import { ProdServiceService } from 'src/app/prod-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  brands:any= [];
  products:any=[];
  selectedProductId: number=0;
 
  constructor(private productService:ProdServiceService, private brandService:BrandServiceService, private route: ActivatedRoute,  private router:Router){}
  
  getProduct() {
    this.productService.getProduct().subscribe(data=>{
    this.products=data;
     console.log(data)
    },error=>{})
  }

  getBrands(){
    this.brandService.getBrand().subscribe(data=>{

      this.brands= data;
      console.log(data)
     },error=>{}) 
  }
  
  ngOnInit(): void {
    this.getProduct();
    this.getBrands();
  }

  showAddAndEditForm(){
    this.router.navigate(['addandedit'], {relativeTo:this.route});
  }

  edit(x:number){
    console.log(x)
    this.selectedProductId =x;
  }

  update(productData:any){
    this.productService.updateProduct(productData).subscribe(data=>{
      this.getProduct();
      console.log(data)
      this.selectedProductId = 0; 
     },error=>{})
  }
  
  deleteProduct(productId:number){
    console.log(productId)
    var retVal = confirm("Are you sure you want to delete?");
    if(retVal){
    this.productService.deleteProduct(productId).subscribe(data=>{
      this.getProduct();
     },error=>{}) 
    }
  }
}
