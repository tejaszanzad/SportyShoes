import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  @Input() productDetails:any;
  product: any =[];

ngOnInit(){
  console.log("productDetails=", this.productDetails)
}
   

addToCart(productDetails:any, qnt:string){
  const cartProductJson = localStorage.getItem('cartProducts');
  var cartProducts = cartProductJson &&  JSON.parse(cartProductJson);
  const product = {productId:productDetails.productId, qnt: qnt, productName: productDetails.productName, price : productDetails.price};
  if(!cartProducts){
    cartProducts = []
  }
  cartProducts.push(product)
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
}
}


