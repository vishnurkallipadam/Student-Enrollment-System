import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { studentModel } from './student.model';
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  _id:any=''
  name:any=''
  details:any=''
  price:any=''
  eligibility:any=''

 courses=(this._id,this.name,this.details,this.price,this.eligibility)
 fees:any=''
  constructor(private courseserrvice:CourseService,private router:Router) { }

  ngOnInit(): void {
    this.courseserrvice.getCourses()
    .subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
      console.log(this.courses);
      
    })
    

  }
  student = new studentModel('','','','','','','','','','')
  courseFee(fee:any){
    console.log(fee);
    this.fees=fee
    console.log(this.fees);
    
  }

  registerStudent(){
  
      console.log(this.student);
      
      
  }

}
