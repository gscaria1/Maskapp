import { Component, OnInit } from '@angular/core';
import{SignModel} from '../signup/signup.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signuser=new SignModel(null,null,null,null,null)

  constructor(private _auth:AuthService , private router :Router ) { }

  ngOnInit(): void {
    this.signuser.image='https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png'
  }

  signUp(){

    this._auth.newUser(this.signuser)
    this.router.navigate([''])
}  



}