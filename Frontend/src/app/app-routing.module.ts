import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import { EmployeeapprovalComponent } from './employeeapproval/employeeapproval.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'add-course',
    component:AddCourseComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'enroll',
    component:RegisterformComponent
  },
  {
    path:'students',
    component:StudentsComponent
  },
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'studentlogin',
        component:StudentloginComponent
      },
      {
        path:'employeesignup',
        component:EmpregisterComponent
      }
    ]
  },
  {
    path:'employee-approval',
    component:EmployeeapprovalComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
