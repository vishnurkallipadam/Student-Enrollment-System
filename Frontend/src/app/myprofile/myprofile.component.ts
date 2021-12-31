import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private studentservice:StudentService) { }

  student:any=[]

  ngOnInit(): void {
    let id = localStorage.getItem('showstudent')
    this.studentservice.getStudent(id)
    .subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data))

    })
  }

}
