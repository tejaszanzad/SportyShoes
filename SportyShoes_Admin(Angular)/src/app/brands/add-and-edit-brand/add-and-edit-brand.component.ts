import { Component, Input } from '@angular/core';
import { BrandServiceService } from 'src/app/brand-service.service';

@Component({
  selector: 'app-add-and-edit-brand',
  templateUrl: './add-and-edit-brand.component.html',
  styleUrls: ['./add-and-edit-brand.component.css']
})
export class AddAndEditBrandComponent {
 
  @Input() getBrands:any;
  constructor(private brandservice: BrandServiceService){} 
 
  add(mytext:any){
    if(mytext ){
    this.brandservice.postBrand({brandName:mytext}).subscribe(data=>{
      console.log(data)
      this.getBrands();
     },error=>{})
  }
}
}
