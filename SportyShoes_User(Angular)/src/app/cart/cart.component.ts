import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  products:any = [];
  isShowCart:boolean = false;
  ngOnInit(): void {
    const cartProductJson = localStorage.getItem('cartProducts');
    var cartProducts = cartProductJson &&  JSON.parse(cartProductJson);
    this.products = cartProducts;
  }

  showCart(){
    this.isShowCart = !this.isShowCart
  }

  clearCart(): void{
    localStorage.clear();
  }
}
