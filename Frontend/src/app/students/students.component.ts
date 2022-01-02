import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { studentModel } from '../registerform/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router,public http:HttpClient) { }
  name:any=''
  id:any=''
  email:any=''
  image:any=''
  students=(this.name,this.id,this.email,this.image)
  query:string | undefined
  public searchFilter: any = '';
  ngOnInit(): void {
    this.studentService.getStudents()
    .subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data))

    })

  }

  showStudent(student:any){
    localStorage.setItem('showstudent',student._id)
    this.router.navigate(['student'])
  }

  enterMark(student:any){
    localStorage.setItem('enterMark',student._id)
    this.router.navigate(['mark-entry'])
  }

  editStudent(student:any){
    localStorage.setItem('editstudent',student._id)
    this.router.navigate(['update-student'])
  }

  deleteStudent(student:any){
      console.log(student);
      this.studentService.removeStudent(student._id)
      .subscribe((data) => {
        this.ngOnInit()
      })
    
  }

}
