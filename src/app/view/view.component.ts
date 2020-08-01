import {Component, OnInit} from '@angular/core';
import {DonateService} from '../donate.service'
import {AddModel} from'../add/add.model';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  feeds:AddModel[];
  
  constructor(public _d:DonateService,private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
       //let userid=this._route.snapshot.paramMap.get("userid")
       let userid=localStorage.getItem("usertype")
       const user={userid:userid};
       console.log(user)
       this._d.view(user).subscribe((data)=>{ console.log(data)
       this.feeds=JSON.parse(JSON.stringify(data)); })
       
  }

  delpro(_id):void{   if(confirm("Confirm to delete")==true){

    console.log(_id)
    let userid=this._route.snapshot.paramMap.get("userid")
    const user={userid:userid};
    console.log(user)
    this._d.deleteitem(_id,user).subscribe((data)=>{this.feeds=JSON.parse(JSON.stringify(data))});
    
    this.router.navigate([localStorage.getItem("usertype")+'/uploads'])
  }}
   
 
}
