import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [TaskService]
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];
  totalPoints: number = 0;

  constructor(
    private _taskService: TaskService) {
  }

  ngOnInit(): void {
    this._taskService.getTasks()
      .then(tasks => { this.tasks = tasks.filter(task => task.completed), this.getTotalPoints() });
  }

  getTotalPoints() {
    this.tasks.forEach(task => this.totalPoints += task.points);
  }

  getPercent() {
    let percent = this.totalPoints/100 * 100 < 100 ? this.totalPoints/100 * 100 : 100;
    return percent + '%';
  }
}
