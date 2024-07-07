import { Routes } from '@angular/router';
import { TodoListComponent } from './todos/views/todo-list/todo-list.component';

export const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent
  }
];
