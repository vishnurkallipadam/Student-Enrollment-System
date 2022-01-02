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

  getPengingEmployee(){
    return this.http.get("http://localhost:5000/pending-employee")

  }

  approveEmployee(id:any){
    return this.http.post("http://localhost:5000/approve-employee",{"id":id})
  }

  rejectEmployee(id:any){
    return this.http.delete("http://localhost:5000/reject-employee/"+id)
  }

  getEmployees(){
    return this.http.get("http://localhost:5000/employees")
  }

  removeEmployee(id:any){
    return this.http.delete("http://localhost:5000/remove-employee/"+id)
  }

  getEmployee(id:any){
    return this.http.get("http://localhost:5000/employee/"+id)
  }

  updateEmployee(data:any){
    return this.http.put("http://localhost:5000/update-employee",{"employee":data})
  }
}
