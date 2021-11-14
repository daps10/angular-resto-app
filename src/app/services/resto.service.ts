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

  // Save resto api
  addResto(data: any){ 
    return this.http.post(this.url,data);
  }

  // delete resto api
  deleteResto(restoId: any){
    return this.http.delete(`${this.url}/${restoId}`);
  }
}
