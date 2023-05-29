import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContractComponent } from './contract/contract.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';


const routing :Routes=[
  // by default  path
{ path:'',component:HomeComponent},
// if we are directly open first 
  //  {path:'',redirectTo:'Home', pathMatch:'full'},

   { path:'Home',component:HomeComponent},
  { path:'About',component:AboutComponent},
  { path:'Contract',component:ContractComponent},
  // { path:'Courses',component:CoursesComponent},
  // error router always at the last routes
  {path:'**',component:ErrorComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContractComponent,
    CoursesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routing)
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
