import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private origin = 'https://jsonplaceholder.typicode.com';
  private httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Todo[]>(`${this.origin}/todos`)
      .pipe(map(res => res.map(todo => new Todo(todo))));
  }
}
