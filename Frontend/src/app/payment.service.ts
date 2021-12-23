import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

function _window() : any {
  // return the global native browser window object
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  get nativeWindow() : any {
    return _window();
 }

  constructor(private http:HttpClient) { }

  createRazorpay(data:any){
    console.log(data);
    
    return this.http.post("http://localhost:5000/create-razorpay",{"razor":data})

  }

  verifyPayment(response:any,id:any){
    console.log(id);
    
    return this.http.post("http://localhost:5000/verify-payment",{"response":response,id})

  }

}
