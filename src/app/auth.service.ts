import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user=(null);
  phno=(null);
  constructor(private http:HttpClient, private router : Router) { }

  newlog(loguser)

  {

    return this.http.post("http://localhost:8000/api/check",{"newlog":loguser}).subscribe((data)=>{
      
    if((data == null))
    {

      alert('Invalid Credentials')
    }
     
    else{  if(data['userid']!="admin"){
      
           this.user=data['userid']
           this.phno=data['phno']
           localStorage.setItem('token',data['token'])
           localStorage.setItem('usertype',data['userid'])
           this.router.navigate([data['userid']+'/home'])
           
          }

   
          else{ alert('Admin Login ?')
           
           this.user=data['userid']
           localStorage.setItem('token',data['token'])
           localStorage.setItem('usertype',data['userid'])
           console.log(localStorage.getItem("usertype"))
           this.router.navigate([data['userid']+'/users'])
        
        }

        }

          
      
      })
     
          
  }
        

    
  newUser(user)
  
  {
    
    return this.http.post("http://localhost:8000/api/add",{"userinfo":user}).subscribe((data)=>{console.log(data)})
   
  }
  


  loggedIn() { return !! localStorage.getItem('token') }

  admin()
  {
    if(localStorage.getItem("usertype")=="admin")
    { return true} 
    else{ return  false}
  }

  users(){ return this.http.get("http://localhost:8000/api/users" )}


  deleteuser(_id){

    return this.http.post("http://localhost:8000/api/deleteuser",{"id":_id} )}

}
