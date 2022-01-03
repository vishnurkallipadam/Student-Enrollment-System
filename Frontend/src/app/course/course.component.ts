import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CourseService } from '../course.service';



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  name:any=''
  details:any=''
  price:any=''
  eligibility:any=''

 course=(this.name,this.details,this.price,this.eligibility)
  constructor(private router:Router,private courseService:CourseService,public http:HttpClient,public auth:AuthService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('showcourse')
    this.courseService.getCourse(id)
    .subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
      console.log(data);
    })
  }

  registerNow(course:any){
    localStorage.setItem('registerCourse',course._id)
    this.router.navigate(['enroll'])


  }

}
