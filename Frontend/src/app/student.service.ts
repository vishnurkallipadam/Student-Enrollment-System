import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  registerStudent(data:any,fees:any){
    return this.http.post("http://localhost:5000/register-student",{"student":data,fees})
  }

  getStudents(){
    return this.http.get("http://localhost:5000/students");
  }

  getStudent(id:any){
    return this.http.get("http://localhost:5000/student/"+id);
  }

  searchStudents(){
    return this.http.get("http://localhost:5000/search-student")
  }

  removeStudent(id:any){
    return this.http.delete("http://localhost:5000/remove-student/"+id)
  }
}
