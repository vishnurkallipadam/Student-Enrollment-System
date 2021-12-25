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

  constructor(private studentService:StudentService,private router:Router) { }
  name:any=''
  id:any=''
  email:any=''
  students=(this.name,this.id,this.email)
  ngOnInit(): void {
    this.studentService.getStudents()
    .subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data))

    })

  }

  showStudent(student:any){
    localStorage.setItem('showstudent',student._id)
    this.router.navigate([''])
    
  }

}
