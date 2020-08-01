import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

 
  constructor(private http:HttpClient, private router : Router) { }

  donate(donate)

  {

    return this.http.post("http://localhost:8000/api/donate",{"newdonate":donate}).subscribe((data)=>{console.log(data)})
     
    
  }


  feeds()
{
  return this.http.get("http://localhost:8000/api/feeds")
}

view(user)
{ 
  
  return this.http.post("http://localhost:8000/api/view",{"userid":user})
}

deleteitem(_id,user)
{
  
return this.http.post("http://localhost:8000/api/delete",{"id":_id,"userid":user})

}

deleteadminitem(_id)
{
  
return this.http.post("http://localhost:8000/api/deleteadminitem",{"id":_id})

}

Upget(ID)
{
  
  console.log(ID)
  return this.http.post("http://localhost:8000/api/uplist",{"ID":ID})
  
}

UpProduct(ID,donate)
{
  console.log(donate)
  return this.http.post("http://localhost:8000/api/update",{"donate":donate,"ID":ID})
  .subscribe((data)=>{console.log(data)})
  
 }

 



}
