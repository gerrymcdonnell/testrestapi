import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WordListComponent } from './components/word-list/word-list.component';

//import forms and routes and http
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import {RouterModule,Routes} from '@angular/router'

//import Dataservice
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';

//routes
//create routes for app
const appRoutes:Routes=[
  {path:'',component:WordListComponent}/*, 
  {path:'about',component:AboutComponent}*/
]


@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    //add imports here
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  //services go here
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
