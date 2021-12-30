import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  user={
    name:'',
    password:'',
    email:'',
    role:''
  }
  employeeRegister(){
    console.log(this.user);
    this.employeeService.employeeRegister(this.user)
    .subscribe(
      response=>{
        console.log("success");
        this.router.navigate(['/login/studentlogin'])
        
      },
      err=>{
        console.log("failed");
        alert("Something happened Wrong try again")
        
      }
    )
    
  }

}
