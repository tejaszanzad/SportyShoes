import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  constructor(public http: HttpClient) { }

  getBrand():Observable<any>{

    return this.http.get("http://localhost:8090/brands");

  }

}
