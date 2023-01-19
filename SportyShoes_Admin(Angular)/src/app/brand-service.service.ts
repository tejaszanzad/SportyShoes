import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  constructor(public http: HttpClient){} 

  getBrand():Observable<any>{

    return this.http.get("http://localhost:8090/brands");
    }

  postBrand(data:any):Observable<any>{

    return this.http.post("http://localhost:8090/brands",data);
  }  
 
  updateBrand(data:any):Observable<any>{

    return this.http.put("http://localhost:8090/brands",data);

  }
  
  deleteBrand(brandId:number):Observable<any>{

    return this.http.delete(`http://localhost:8090/brands/${brandId}`);
    }

}
