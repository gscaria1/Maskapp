import { Component, OnInit } from '@angular/core';
import {AuthService} from'../auth.service';
import{SignModel} from '../signup/signup.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  
  users:SignModel[];
  constructor(public _auth:AuthService) { }

  ngOnInit(): void {

      this._auth.users().subscribe((data)=>{
      console.log(data)
      this.users=JSON.parse(JSON.stringify(data)); })
  }

  delpro(_id):void{   if(confirm("Confirm to delete")==true){

    console.log(_id)
    
    this._auth.deleteuser(_id).subscribe((data)=>{this.users=JSON.parse(JSON.stringify(data))});
    
  }}

}
