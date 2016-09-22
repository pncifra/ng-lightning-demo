import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task';
import { TaskService } from './task.service';


@Component({
  moduleId: module.id,
  selector: 'my-settings',
  templateUrl: 'settings.component.html'
})
export class SettingsComponent implements OnInit {

  ngOnInit() {
      // grab all the preferences
  }

}
