import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import {NglModule, provideNglConfig} from 'ng-lightning/ng-lightning';
import {routing, routedComponents} from "./app.routing";
import { FormsModule }   from '@angular/forms';
import { Task } from './task';
import { TaskService } from './task.service';



@NgModule({
 imports: [
   NglModule,
   BrowserModule,
   routing,
   HttpModule,
   FormsModule
 ],
 declarations: [
   AppComponent,
   routedComponents
 ],
 providers: [
   provideNglConfig()
 ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
