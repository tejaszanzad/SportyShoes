import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { BrandServiceService } from 'src/app/brand-service.service';

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.css']
})
export class AdvancedFilterComponent implements OnInit {

  @Output() doFilterEvent = new EventEmitter<number[]>();
  constructor(private brandservice:BrandServiceService){}
  
  brands: any =[];
 
  ngOnInit(): void {
    this.brandservice.getBrand().subscribe(data=>{

      this.brands= data;
      console.log(data)
     },error=>{}) 
  }

  filterProducts(brandId:number){
    const filterBrandIds:number[] = [];
    this.brands.forEach((b:any )=> {
      if(b.brandId === brandId) b.checked = !b.checked;
      if(b.checked){
        filterBrandIds.push(b.brandId)
      }
    });
    console.log("***",this.brands)
    this.doFilterEvent.emit(filterBrandIds)
  }
}
