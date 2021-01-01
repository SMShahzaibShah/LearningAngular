import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:3000/doctor/delete"
  constructor(private http:HttpClient) { }

  getData(id: any,visit: any){
     
    return this.http.delete(`${this.url}/${id}/${visit}`);
  }
}
