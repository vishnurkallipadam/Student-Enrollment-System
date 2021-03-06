import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { EmpregisterComponent } from './empregister/empregister.component';
import { EmployeeapprovalComponent } from './employeeapproval/employeeapproval.component';
import { EmployeesComponent } from './employees/employees.component';
import { SearchComponent } from './search/search.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { AuthService } from './auth.service';
import { CourseService } from './course.service';
import { EmployeeService } from './employee.service';
import { PaymentService } from './payment.service';
import { StudentService } from './student.service';
import { AdminguardGuard } from './adminguard.guard';
import { EmployeeguardGuard } from './employeeguard.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CourseComponent,
    AddCourseComponent,
    CoursesComponent,
    RegisterformComponent,
    MyprofileComponent,
    StudentsComponent,
    LoginComponent,
    StudentloginComponent,
    EmpregisterComponent,
    EmployeeapprovalComponent,
    EmployeesComponent,
    SearchComponent,
    SearchFilterPipe,
    UpdateCourseComponent,
    UpdateEmployeeComponent,
    UpdateStudentComponent,
    MarkEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,CourseService,EmployeeService,PaymentService,StudentService,AdminguardGuard,EmployeeguardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
