import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {NglModule} from 'ng-lightning/ng-lightning';



@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="site-masthead">
    <h1>
      <svg aria-hidden="true" class="slds-icon--large slds-icon-text-default">
        <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#paste"></use>
      </svg>
      Task Tracker
    </h1>
  </div>
  <div>
    <div>
      <ngl-tabs [(selected)]="selectedTab" [type]="type">
        <ngl-tab nglTabId="Tasks" (onActivate)="tabChange('/tasks', 'active')">
          <template ngl-tab-heading>
             <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
              <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#check"></use>
             </svg>
             Tasks
          </template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
        <ngl-tab nglTabId="Dashboard" (onActivate)="tabChange('/dashboard', 'active')">
          <template ngl-tab-heading>
            <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
              <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#metrics"></use>
            </svg>
            Dashboard
          </template>
          <template ngl-tab-content>
            <router-outlet></router-outlet>
          </template>
        </ngl-tab>
        <ngl-tab nglTabId="Settings" (onActivate)="tabChange('/settings', 'active')">
          <template ngl-tab-heading >
            <svg aria-hidden="true" class="slds-icon--x-small slds-icon-text-default">
              <use xlink:href="assets/icons/utility-sprite/svg/symbols.svg#custom_apps"></use>
            </svg>
            Settings
          </template>
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
    private  _router: Router) {
  }

  protected tabChange(link: string, event: string) {
    this._router.navigate([link]);
  }
}
