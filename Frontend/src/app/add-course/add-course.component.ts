import { Component, OnInit } from '@angular/core';
import { courseModel } from './course.model';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course=new courseModel('','','','','','','')
  images: any;

  constructor(private courseService:CourseService,private router:Router,private http:HttpClient) { }


  ngOnInit(): void {
  }

  
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      
      const file = event.target.files[0];
      this.images = file;     
      console.log(this.images);
    }
  }

  

    add:any=[]

    addCourse(){
      console.log(this.course);

      const formData = new FormData();
      formData.append('image', this.images);

      this.courseService.addCourse(this.course)
      .subscribe(res=>{
        console.log(res);
        this.add = JSON.parse(JSON.stringify(res));
        formData.set('id',this.add._id);
        this.http.post<any>('http://localhost:5000/uploadImage',formData).subscribe(
            (data) => {
              console.log(data);
              this.router.navigate(['/courses'])
            },
            (err) => console.log(err)
            );
      },
      err=>{
        console.log(err);
        this.router.navigate(['/add-course'])
        
      }
      )
    }
    
  }
  