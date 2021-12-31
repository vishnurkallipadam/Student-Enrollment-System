import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }

  loginForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
    role: new FormControl('')
  })

  get email(){ 
    return this.loginForm.get('email');
  }
  
  get password(){ 
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }
  
  employeeRegister(){
    console.log(this.loginForm.value);
    this.employeeService.employeeRegister(this.loginForm.value)
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
