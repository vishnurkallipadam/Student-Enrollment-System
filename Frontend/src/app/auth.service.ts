import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  studentLogin(data:any){
    return this.http.post("http://localhost:5000/studentLogin",{"student":data})
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

  adminLogin(data:any){
    console.log(data);
    
    return this.http.post("http://localhost:5000/adminLogin",{"admin":data})
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

  employeeLogin(data:any){
    return this.http.post("http://localhost:5000/employeeLogin",{"employee":data})
    .subscribe((data)=>{
      console.log(data);
      
    })
  }

}
