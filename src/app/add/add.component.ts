import {Component, OnInit} from '@angular/core';
import {AddModel}from'./add.model';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from'../auth.service';
import {DonateService}from'../donate.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
    userid='inital';
   

   constructor(public _auth:AuthService,private _route: ActivatedRoute,public _d:DonateService, private router :Router) {
  
   }

  donate= new AddModel(null,null,null,null,null,null,null)

  ngOnInit(): void {

      this._route.params.subscribe(params => {
      this.userid = params['userid'];
      this.donate.Userid= this.userid
      this.donate.phno=this._auth.phno
    
    })

  }
 
  add(){

     if(this.donate.Item=="Mask"){this.donate.Imageurl="assets/images/mask.jpg"}
    
     if(this.donate.Item=="Sanitizer"){this.donate.Imageurl="assets/images/sanitizer.jpg"}

     if(this.donate.Item=="Gloves"){this.donate.Imageurl="assets/images/gloves.jpg"}

     if(this.donate.Item=="Personal Protective Equipment Kit"){this.donate.Imageurl="assets/images/ppe-kit.jpg"}

    this._d.donate(this.donate)


    //this.router.navigate([this._auth.user+'/home'])

    this.router.navigate([localStorage.getItem("usertype")+'/home'])
    
  }
  
}
