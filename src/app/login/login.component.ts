import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {LoginModel}from'./login.model';

 
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 constructor(private _auth :  AuthService , private router : Router ) {

 
  }
 
loguser= new LoginModel(null,null);


ngOnInit(): void {}
  
  inuser()
{
   this._auth.newlog(this.loguser)
 
}


}

