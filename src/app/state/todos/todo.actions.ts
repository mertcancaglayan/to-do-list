import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo.model';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ content: string }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ id: number }>()
);

export const loadTodos = createAction('[Todo] Load Todo');

export const saveTodosToLocalStorage = createAction(
  '[Todo] Save Todos To LocalStorage',
  props<{ todos: Todo[] }>()
);
