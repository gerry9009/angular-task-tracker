import { Component, OnInit } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';

import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  // Fire out when page loading
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask = (task: Task) => {
    // Update UI
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    // Update Server
    this.taskService.deleteTask(task).subscribe();
  };

  toggleReminder = (task: Task) => {
    // Update UI
    task.reminder = !task.reminder;
    // Update Server
    this.taskService.toggleTaskReminder(task).subscribe();
  };

  addTask = (task: Task) => {
    this.tasks.push(task);
    this.taskService.addTask(task).subscribe();
  };
}
