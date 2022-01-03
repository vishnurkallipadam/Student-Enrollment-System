import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeguardGuard implements CanActivate {  constructor(private authservice:AuthService,private router:Router){}
canActivate():boolean{
  let a = false
  if (this.authservice.employeeLoggedIn())
  {
    a=true
  }
  if (this.authservice.adminLoggedIn())
  {
    a=true
  }

  if(a=true){
    return true;
  }
  else{
    this.router.navigate(['/login'])
    return false
  }

}
  
}
