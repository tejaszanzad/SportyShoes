import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  constructor(public http: HttpClient){}

getProduct():Observable<any>{

return this.http.get("http://localhost:8090/products");
}

addProduct(data:any):Observable<any>{

  return this.http.post("http://localhost:8090/products",data); 
}

updateProduct(data:any):Observable<any>{

  return this.http.put("http://localhost:8090/products",data);

}

deleteProduct(productId:number):Observable<any>{

 return this.http.delete(`http://localhost:8090/products/${productId}`); 
}
  

}
