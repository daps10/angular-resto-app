import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/restaurants/";
  getList (){
    return this.http.get(this.url);
  }
}
