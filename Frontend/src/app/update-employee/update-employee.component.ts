import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  name:any=''
  email:any=''
  role:any=''
  _id:any=''
  employee=(this.name,this.email,this.role,this._id)

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
    let id = localStorage.getItem('editEmployee')
    this.employeeService.getEmployee(id)
    .subscribe((data)=>{
      this.employee=JSON.parse(JSON.stringify(data))
      console.log(this.employee);
      
    })
  }

  employeeUpdate(){
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employee)
    .subscribe(
      response=>{
        console.log("success");
        this.router.navigate(['/employees'])  
      },
      err=>{
        console.log("failed");
        alert("Something happened Wrong try again")
      }
    ) 
  }
}
