import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {UpdateComponent}from './update/update.component';
import {AddComponent} from './add/add.component';
import {ViewComponent} from'./view/view.component';
import {AuthGuard} from './auth.guard';
import {UsersComponent} from'./users/users.component';


const routes: Routes = [{path:"",component:LoginComponent},
                      {path:"signup",component:SignupComponent},{path:":userid/home",component:HomeComponent,canActivate:[AuthGuard]},{path:":userid/add",component:AddComponent,canActivate:[AuthGuard]},{path:":userid/uploads",component:ViewComponent,canActivate:[AuthGuard]},{path:":userid/update/:id",component:UpdateComponent},{path:"admin/users",component:UsersComponent},{path:"admin/donates",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
