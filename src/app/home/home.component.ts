import { Component, OnInit } from '@angular/core';
import{DonateService} from '../donate.service';
import{AddModel} from'../add/add.model';
import { ActivatedRoute } from '@angular/router';
import{AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  feeds:AddModel[];
  
  constructor(public _d:DonateService,private _route: ActivatedRoute,public _auth:AuthService,private router :Router) { }

  ngOnInit(): void {

      this._d.feeds().subscribe((data)=>{
      console.log(data)
      this.feeds=JSON.parse(JSON.stringify(data))} )
      console.log(localStorage.getItem("usertype"))
     }
    
  delpro(_id):void{   if(confirm("Confirm to delete")==true){

    console.log(_id)
    
    
  
    this._d.deleteadminitem(_id).subscribe((data)=>{this.feeds=JSON.parse(JSON.stringify(data))});
    this.router.navigate([localStorage.getItem("usertype")+'/home'])
  }}
  
  
 
}
