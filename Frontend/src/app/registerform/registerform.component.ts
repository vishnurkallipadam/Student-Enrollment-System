import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { studentModel } from './student.model';
import { StudentService } from '../student.service';
import { PaymentService } from '../payment.service';

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
  constructor(private courseserrvice:CourseService,private router:Router,private studentService:StudentService,private paymenetService:PaymentService) { }
  try:any=[]
  ngOnInit(): void {
    this.courseserrvice.getCourses()
    .subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data))
      console.log(this.courses);
      
    })
    

  }
  student = new studentModel('','','','','','','','','','','')
 
  courseFee(id:any){
    console.log(id);
    this.courseserrvice.getCourse(id)
    .subscribe((data)=>{
      this.try=JSON.parse(JSON.stringify(data))
      console.log(this.try.price);
      this.fees=this.try.price
      
    })
    
  }
   options = {
    "key": "rzp_test_ZGATXfSKdjDjl0", // Enter the Key ID generated from the Dashboard
    "amount": "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "ICT ACADEMY KERALA",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": (response: any)=>{
      
      this.handle_response(response);
      
    },
    "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#00000"
    }
};
 order:any=[]
  registerStudent(){
    this.studentService.registerStudent(this.student,this.fees)
    .subscribe((data)=>{
      console.log(data);
      this.order=JSON.parse(JSON.stringify(data))
      this.options.order_id=this.order.id
      this.options.amount=this.order.amount
      let rzp1 = new this.paymenetService.nativeWindow.Razorpay(this.options);
      rzp1.open(); 
    })
  }
  paymentResponse:any=[]
  handle_response(_response: any){
    console.log(_response);
    this.paymenetService.verifyPayment(_response)
    .subscribe((success)=>{
      console.log(success);
      this.paymentResponse=JSON.parse(JSON.stringify(success))
      console.log(this.paymentResponse.signatureIsValid);
      
      if(this.paymentResponse.signatureIsValid){
        alert("payment is success")
        this.router.navigate([''])
      }else{
        alert("payment is failed please retry")
        this.router.navigate(['enroll'])
      }
      
     
    })
  }
}




