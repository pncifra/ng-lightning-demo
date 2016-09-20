import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
//import { RouteParams } from '@angular/router-deprecated';
import { ActivatedRoute, Params } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  moduleId: module.id,
  selector: 'my-task-detail',
  templateUrl: 'task-detail.component.html',
  styleUrls: ['task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
    @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private _taskService: TaskService,
    private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this._taskService.getTask(id)
            .then(task => this.task = task);
      // } else {
      //   this.navigated = false;
      //   this.task = new Task();
      }
    });
    // let id = +this._routeParams.get('id');
    // this._taskService.getTask(id)
    //   .then(task => this.task = task);
  }

  goBack() {
    window.history.back();
  }
}
