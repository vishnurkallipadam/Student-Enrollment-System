import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeeapproval',
  templateUrl: './employeeapproval.component.html',
  styleUrls: ['./employeeapproval.component.css']
})
export class EmployeeapprovalComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  name:any=''
  email:any=''
  role:any=''
  
  employees=(this.name,this.email,this.role)

  ngOnInit(): void {
    this.employeeService.getPengingEmployee()
    .subscribe((data)=>{
      this.employees=JSON.parse(JSON.stringify(data))
    })
  }

  approveEmployee(data:any){
    console.log(data);
    this.employeeService.approveEmployee(data._id)
    .subscribe(
      res=>{
        alert("Employee Approved")
        this.ngOnInit()
      },
      err=>{
        alert("something happened wrong try again")
        this.ngOnInit()
      }
    )
    
  }

  rejectEmployee(data:any){
    console.log(data);
    this.employeeService.rejectEmployee(data._id)
    .subscribe(
      res=>{
        alert("Employee Rejected")
        this.ngOnInit()
      },
      err=>{
        alert("something happened wrong try again")
        this.ngOnInit()
      }
    )
    
  }

}
