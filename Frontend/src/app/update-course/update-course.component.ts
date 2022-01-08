import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { courseModel } from '../add-course/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  constructor(private courseService:CourseService,private router:Router,private http:HttpClient) { }
  course=new courseModel('','','','','','','')
  images: any;
  ngOnInit(): void {
    let id = localStorage.getItem('editcourse')
    this.courseService.getCourse(id)
    .subscribe((data)=>{
      this.course=JSON.parse(JSON.stringify(data));
      console.log(data);
    })
  }
  selectImage(event:any) {
    if (event.target.files.length > 0) {
      
      const file = event.target.files[0];
      this.images = file;     
      console.log(this.images);
    }
  }
  add:any=''
  updateCourse(){
      console.log(this.course);

      const formData = new FormData();
      formData.append('image', this.images);
      this.courseService.updateCourse(this.course)
      .subscribe(res=>{
        console.log("after updating"+res);
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
        this.router.navigate(['/update-course'])
        
      }
      )


  }

}
