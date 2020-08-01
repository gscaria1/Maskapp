import { Component, OnInit } from '@angular/core';
import {AddModel} from '../add/add.model';
import { ActivatedRoute } from '@angular/router';
import {DonateService} from '../donate.service';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  donate= new AddModel(null,null,null,null,null,null,null)

  constructor(public _d:DonateService,private _route: ActivatedRoute,private router :Router,public _auth:AuthService ) { }

  ngOnInit(): void {

    let id=this._route.snapshot.paramMap.get("id")
    const ID={id:id};
    
    this._d.Upget(ID)
    .subscribe((data)=>{this.donate=JSON.parse(JSON.stringify(data)); })
  }

  UProduct(){

    let id=this._route.snapshot.paramMap.get("id")
    const ID={id:id};

    // if(this.donate.Item=="Mask"){this.donate.Imageurl="https://www.pennlive.com/resizer/IEB_Yqz3Jk7WcspvyGGQ_J3zcSI=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BYMAZ4PXUFGLLAQYXXDKXWLGLY.JPG"}
    
    // if(this.donate.Item=="Sanitizer"){this.donate.Imageurl="https://image.freepik.com/free-vector/flat-design-person-using-hand-sanitizer_23-2148476372.jpg"}

    // if(this.donate.Item=="Gloves"){this.donate.Imageurl="https://5.imimg.com/data5/EN/VR/MG/SELLER-3499144/nitrile-disposable-gloves-500x500.jpg"}

    // if(this.donate.Item=="Personal Protective Equipment Kit"){this.donate.Imageurl="https://www.foremansafetysupply.com/wp-content/uploads/2017/06/RCMP_PPEBC.jpg"}


    this._d.UpProduct(ID,this.donate)
    
    alert('Successfully updated');
    //this.router.navigate([this._auth.user+'/uploads'])
    this.router.navigate([localStorage.getItem("usertype")+'/uploads'])
  }

}
