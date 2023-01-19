import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  products: any= [];
  totalAmount :number = 0;
  ngOnInit(): void {
    const cartProductJson = localStorage.getItem('cartProducts');
    var cartProducts = cartProductJson &&  JSON.parse(cartProductJson);
    this.products = cartProducts;
    this.totalAmount = this.products.reduce((oldVal:number, prod:any)=>{
      return prod.price + oldVal;
    }, 0)
    console.log("*****",this.totalAmount)
  }

}
