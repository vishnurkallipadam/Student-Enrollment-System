import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {

  constructor(private authservice:AuthService,private router:Router){}
  canActivate():boolean{
    if (this.authservice.adminLoggedIn())
    {
      console.log('true')
      return true

    }
    else{
      this.router.navigate(['/login/studentlogin'])
      return false

    }

  }
  
}
