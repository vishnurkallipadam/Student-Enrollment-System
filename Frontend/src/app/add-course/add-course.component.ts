import { Component, OnInit } from '@angular/core';
import { courseModel } from './course.model';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course=new courseModel('','','','')

  constructor(private courseService:CourseService,private router:Router) { }

  ngOnInit(): void {
  }

  addCourse(){
    console.log(this.course);
    this.courseService.addCourse(this.course)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate([''])
      
    },
    err=>{
      console.log(err);
      this.router.navigate(['/add-course'])
      
    }
    )
    
  }

}
