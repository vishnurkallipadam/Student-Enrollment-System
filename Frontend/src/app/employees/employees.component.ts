import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  name:any=''
  email:any=''
  role:any=''
  
  employees=(this.name,this.email,this.role)
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe((data)=>{
      this.employees=JSON.parse(JSON.stringify(data))
    })
  }

  showEmployee(employee:any){}

}
