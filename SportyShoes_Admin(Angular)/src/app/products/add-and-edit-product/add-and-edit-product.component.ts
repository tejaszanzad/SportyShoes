import { Component, OnInit } from '@angular/core';
import { BrandServiceService } from 'src/app/brand-service.service';
import { ProdServiceService } from 'src/app/prod-service.service';

@Component({
  selector: 'app-add-and-edit-product',
  templateUrl: './add-and-edit-product.component.html',
  styleUrls: ['./add-and-edit-product.component.css']
})
export class AddAndEditProductComponent implements OnInit{
  brands:any=[];
  
  constructor(private brandService:BrandServiceService, private productService: ProdServiceService){}
  ngOnInit(): void {
    this.brandService.getBrand().subscribe(data=>{

      this.brands= data;
      console.log(data)
     },error=>{}) 
  }
  
  
  product = {
    productName: '',
    price: '',
    qty: '',
    brandId: ''
  };

  addProduct() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(data=>{
     },error=>{})
  }

}
