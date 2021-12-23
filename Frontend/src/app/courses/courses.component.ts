import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

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
