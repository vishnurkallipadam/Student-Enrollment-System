import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private studentservice:StudentService,private router:Router,public auth:AuthService) { }

  student:any=[]

  ngOnInit(): void {
    let id = localStorage.getItem('showstudent')
    this.studentservice.getStudent(id)
    .subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data))
    })
  }

  updateProfile(student:any){
    localStorage.setItem('editstudent',student._id)
    this.router.navigate(['/update-student'])
  }

}
