import { Component, OnInit } from '@angular/core';
import { studentModel } from '../registerform/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService:StudentService) { }
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
    
  }

}
