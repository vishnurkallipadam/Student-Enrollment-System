import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  addCourse(course:any)
  {   
    return this.http.post("http://localhost:5000/add-course",{"course":course})
    
  }

}
