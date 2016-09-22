import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { SettingsComponent } from './settings.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'detail/:id',
    component: TaskDetailComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: 'tasks',
    component: TasksComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// routed components
export const routedComponents = [DashboardComponent, TaskDetailComponent, SettingsComponent, TasksComponent];
