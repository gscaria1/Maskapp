import { Component } from '@angular/core';
import * as AOS from 'aos';
import{AuthService} from'./auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angmask';
  
  constructor(public _auth:AuthService , private router : Router){}

  ngOnInit(): void {AOS.init();}

logoutuser()
{
  
  this.router.navigate(['/']) 
  localStorage.removeItem('usertype')
  localStorage.removeItem('token')
}


view(){
  
  
  //this.router.navigate([this._auth.user+'/uploads'])  
  this.router.navigate([localStorage.getItem("usertype")+'/uploads'])  }


add(){
  
   
    //this.router.navigate([this._auth.user+'/add']) 
    this.router.navigate([localStorage.getItem("usertype")+'/add'])   }
  
feed(){
  
     
      //this.router.navigate([this._auth.user+'/home']) 
      this.router.navigate([localStorage.getItem("usertype")+'/home'])   }
  
  

log(){

  
  this.router.navigate(['/']) 

}


sign(){

  
  this.router.navigate(['signup']) 

}

D(){this.router.navigate(['admin/donates']) }

U(){this.router.navigate(['admin/users']) }

}


