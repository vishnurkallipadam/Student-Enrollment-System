import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { studentModel } from '../registerform/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private router:Router,private studentService:StudentService) { }
  student= new studentModel()
  ngOnInit(): void {
    let id = localStorage.getItem('editstudent')
    this.studentService.getStudent(id)
    .subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data))
      console.log(this.student);
      
    })
  }

  updateStudent(){
    console.log(this.student);
    this.studentService.updateStudent(this.student)
    .subscribe(
      response=>{
        console.log("success");
        this.router.navigate(['/'])  
      },
      err=>{
        console.log("failed");
        alert("Something happened Wrong try again")
      }
    ) 

  }

}
