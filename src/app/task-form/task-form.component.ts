import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskTitle = '';
  taskDescription = '';

  constructor( private taskService: TaskService){}
  onSubmit(){
    const newTask = new Task(Date.now(), this.taskTitle, this.taskDescription, false);
    this.taskService.addTask(newTask);
    this.taskTitle = '';
    this.taskDescription = '';
    
  }

}
