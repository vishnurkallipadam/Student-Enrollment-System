import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


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
  constructor(private employeeService:EmployeeService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
    .subscribe((data)=>{
      this.employees=JSON.parse(JSON.stringify(data))
    })
  }


  editEmployee(employee:any){
    localStorage.setItem('editEmployee',employee._id)
    this.router.navigate(['update-employee'])
  }

  deleteEmployee(employee:any){
    if(confirm("Are you sure to delete this employee??")) {
      this.employeeService.removeEmployee(employee._id)
      .subscribe((data) => {
      this.ngOnInit()
    })
    }else{
      this.ngOnInit()
    }
  }


}
