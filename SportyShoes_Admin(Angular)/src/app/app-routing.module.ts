import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { AddAndEditProductComponent } from './products/add-and-edit-product/add-and-edit-product.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
   },
  {
   path:'prod',component:ProductsComponent,
   children:[
    {
      path :"",component:ProductListComponent
    },
    {
      path :"prodlist",component:ProductListComponent
    },
    {
      path:"addandedit",component:AddAndEditProductComponent
    }
   ]
  },
  {
    path:'brand',component:BrandsComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'signin',component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
