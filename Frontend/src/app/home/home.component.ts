import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   name:any=''
   certification:any=''
   code:any=''
   details:any=''
   price:any=''
   eligibility:any=''
   image:any=''

  courses=(this.name,this.certification,this.code,this.details,this.price,this.eligibility,this.image)

  constructor(private courseService:CourseService,private router:Router,public http:HttpClient) {
    this.courseService.getCourses()
    .subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })
   }

  ngOnInit(): void {

  }

  showCourse(course:any){
    localStorage.setItem('showcourse',course._id)
    this.router.navigate(['course'])
  }
}
