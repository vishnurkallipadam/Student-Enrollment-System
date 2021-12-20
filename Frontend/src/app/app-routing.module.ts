import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path:'',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
