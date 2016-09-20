import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FormsModule } from '@angular/forms';
//import { NgForm } from '@angular/common';

import { Task } from './task';
import { TaskDetailComponent } from './task-detail.component';
import { TaskService } from './task.service';
//import { NGL_DIRECTIVES } from 'ng-lightning/ng-lightning';

@Component({
  moduleId: module.id,
  selector: 'my-tasks',
  templateUrl: 'tasks.component.html',
  styleUrls:  ['tasks.component.css'],
  providers: [TaskService, TaskDetailComponent]
  //directives: [TaskDetailComponent]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  allTasks: Task[];
  selectedTasks: Task[] = [];
  selectedTask: Task;
  opened: boolean = false;
  newTask: Task = new Task(1,'', false, 0, 0, 0);

  constructor(
    private _router: Router,
    private _taskService: TaskService) { }

  ngOnInit() {
    this.getTasks().then( () => {console.log('allTasks is ', this.allTasks)});
  }
  
  getTasks() {
    return this._taskService.getTasks().then(tasks => { this.allTasks = tasks, this.tasks = tasks.filter(task => !task.completed)});
  }
  
  onSelect(task: Task) {
    let index = this.selectedTasks.findIndex(item => item.id === task.id);
    if (index === -1){
      this.selectedTasks.push(task);
    }  else {
      this.selectedTasks.splice(index, 1);
    }
  }
   
  open() {
    this.opened = !this.opened;
  }
  
  onSubmit () {
    this.newTask.id = this.allTasks.length + 1;
    this.newTask.points = (this.newTask.difficulty * 8) - this.newTask.priority * 2;
    this._taskService.createTask(new Task(this.newTask.id,this.newTask.name, false, this.newTask.priority, this.newTask.difficulty, this.newTask.points));
    this.opened = false;
    this.getTasks();
    this.newTask = new Task(1,'', false, 0, 0, 0);
  }
  
  markComplete() {
    this.selectedTasks.forEach(task => this.updateTask(task));
    this.getTasks();
  }
  
  updateTask(task: Task){
    //do somethiing yo..
    this._taskService.markComplete(task.id).then(() => this.getTasks());
  }

  cancel() {
    this.opened = false;
  }
  
  getType(task: Task) {
    switch(Number(task.priority)) {
      case 1:
        return 'error';
      case 2:
        return 'warning';
      case 3:
        return 'success';
      default:
        return 'success';
    }
  }
  
  gotoDetail() {
    this._router.navigate(['/detail', { id: this.selectedTask.id }]);
  }
}
