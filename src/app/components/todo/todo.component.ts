import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { addTodo, deleteTodo } from '../../state/todos/todo.actions';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.todos$ = this.store.select((state) => state.todos.todos);
  }

  addTodo(title: string) {
    if (title.trim()) {
      this.store.dispatch(addTodo({ content: title }));
    }
  }

  deleteTodo(id: number) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
