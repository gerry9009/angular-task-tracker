import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept', // Allowed headers
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks = (): Observable<Task[]> => {
    return this.http.get<Task[]>(this.apiUrl);
  };

  deleteTask = (task: Task): Observable<Task> => {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url);
  };

  toggleTaskReminder = (task: Task): Observable<Task> => {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url, task, httpOptions);
  };

  addTask = (task: Task): Observable<Task> => {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  };
}
