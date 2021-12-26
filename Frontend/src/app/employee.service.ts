import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  employeeRegister(data:any){
    console.log(data);
    return this.http.post("http://localhost:5000/employeeRegister",{"employee":data})
    
  }

}
