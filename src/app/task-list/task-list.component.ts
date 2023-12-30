import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskDescription: string = '';

  constructor( private taskService: TaskService){}
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  addTask(newTask: Task): void {
    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks();
  }

  addNewTask(): void {
    const newTask: Task = {
      id:  0,
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      completed: false,
      titel: ''
    };

    this.taskService.addTask(newTask);
    this.tasks = this.taskService.getTasks();

    // Clear input fields
    this.newTaskTitle = '';
    this.newTaskDescription = '';

}
}
function uuidv4(): number {
  throw new Error('Function not implemented.');
}

