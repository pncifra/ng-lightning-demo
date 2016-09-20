import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from './data-tasks';

@Injectable()
export class TaskService {
  getTasks() {
    return Promise.resolve(TASKS);
  }
  
  getTask(id: number) {
    return Promise.resolve(TASKS).then(
      tasks => tasks.filter(task => task.id === id)[0]
    );
  }
  
  createTask(task: Task) {
    TASKS.push(task);
  }
  
  markComplete(id: number){
    return Promise.resolve(TASKS).then(
      tasks => { tasks.filter(task => task.id === id)[0].completed = true}
    );
  }
}
