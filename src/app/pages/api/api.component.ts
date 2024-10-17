import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.scss'
})
export class ApiComponent {
  private apiService = inject(ApiService);

  todos: Todo[] = [];

  constructor() {
    this.apiService.getAll()
      .subscribe({
        next: (todos) => {
          this.todos = todos;
        },
        error: console.error
      });
  }
}
