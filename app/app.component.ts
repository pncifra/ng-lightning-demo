import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
//import { Router } from '@angular/router-deprecated';
//
//import { DashboardComponent } from './dashboard.component';
//import { SettingsComponent } from './settings.component';
//import { TasksComponent } from './tasks.component';
//import { TaskDetailComponent } from './task-detail.component';
//import { TaskService } from './task.service';
import {NglModule, provideNglConfig} from 'ng-lightning/ng-lightning';



@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="site-masthead">
    <h1>
      <svg aria-hidden="true" class="slds-icon--large slds-icon-text-default">
       </svg>
       Task Tracker
   </h1>
  </div>
  <div>
    <div>
      <ngl-tabs [(selected)]="selectedTab" [type]="type">
        <ngl-tab nglTabId="Tasks">
          <template ngl-tab-heading>
             <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
             </svg>
             <a routerLink="/tasks" routerLinkActive="active">Tasks</a></template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
        <ngl-tab nglTabId="Dashboard">
          <template ngl-tab-heading>
            <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
             </svg>
             <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a></template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
        <ngl-tab nglTabId="Settings">
          <template ngl-tab-heading>
            <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
             </svg>
             <a routerLink="/settings" routerLinkActive="active" >Settings</a></template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
      </ngl-tabs>
    </div>
  </div>
  `,
  styleUrls: ['app.component.css'],
  providers: [NglModule],
})

export class AppComponent {
  title = 'Task Helper';
  type: string = 'scoped';
  selectedTab: any = 'Tasks';

  constructor(
    private  _router: Router,
    private route: ActivatedRoute ) {
  }

//TODO: use the new router and look into RouterSegement component
  ngOnInit() {
    console.log('selected tab is ' + this._router.url);
    //this.selectedTab = this._router.url;
  }
}


