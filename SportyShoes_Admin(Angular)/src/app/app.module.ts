import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandsComponent } from './brands/brands.component';
import { AddAndEditBrandComponent } from './brands/add-and-edit-brand/add-and-edit-brand.component';
import { AddAndEditProductComponent } from './products/add-and-edit-product/add-and-edit-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    BrandsComponent,
    ProductsComponent,
    AddAndEditBrandComponent,
    AddAndEditProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
