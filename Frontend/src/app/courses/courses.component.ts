import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

   name:any=''
   certified:any=''
   code:any=''
   details:any=''
   price:any=''
   eligibility:any=''
   image:any=''

  courses=(this.name,this.certified,this.code,this.details,this.price,this.eligibility,this.image)

  constructor(private courseService:CourseService,private router:Router,public http:HttpClient) { }

  ngOnInit(): void {
    this.courseService.getCourses()
    .subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
    })

  }
  
  showCourse(course:any){
    localStorage.setItem('showcourse',course._id)
    this.router.navigate(['course'])
  }

  deleteCourse(course:any){
    console.log(course);
    this.courseService.removeCourse(course._id)
    .subscribe((data) => {
      this.router.navigate(['courses'])
    })
  }
  editCourse(course:any){}

}
