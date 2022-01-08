import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { studentModel } from '../registerform/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-mark-entry',
  templateUrl: './mark-entry.component.html',
  styleUrls: ['./mark-entry.component.css']
})
export class MarkEntryComponent implements OnInit {
  student= new studentModel()
  constructor(private router:Router,private studentservice:StudentService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('enterMark')
    this.studentservice.getStudent(id)
    .subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data))
    })
  }

  enterMark(){
    console.log(this.student)
    this.studentservice.exitMark(this.student)
    .subscribe(
      (response:any)=>{
        console.log(response);
        localStorage.setItem('showstudents',response._id)
        this.router.navigate(['/student'])
        
      },
      err=>{
        console.log("failed");
        alert("error occured try again")
        this.ngOnInit()
        
      }
    )
  }

}
