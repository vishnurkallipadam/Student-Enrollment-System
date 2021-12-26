import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
user={
  email:'',
  password:'',
  role:''
}


  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    if(this.user.role=="employee"){
      console.log("employee");
      this.authService.employeeLogin(this.user)
      

    }else if(this.user.role=="student"){
      console.log("student");
      this.authService.studentLogin(this.user)


    }else{
      console.log("admin");
      this.authService.adminLogin(this.user)


    }
    
  }

}
