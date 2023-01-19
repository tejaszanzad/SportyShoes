import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
   {
    path:'checkout',component:OrderComponent
   },
   {
    path:'payment',component:PaymentComponent
   },
   {
   path:'confirm',component:ConfirmationComponent
   },
   {
    path:'',component:ProductsComponent
   },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
