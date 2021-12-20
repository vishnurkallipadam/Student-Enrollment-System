import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:any=''
   details:any=''
   price:any=''
   eligibility:any=''

  courses=(this.name,this.details,this.price,this.eligibility)

  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit(): void {
    this.courseService.getCourses()
    .subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
  }

}
