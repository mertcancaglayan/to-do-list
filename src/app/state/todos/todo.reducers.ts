import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import { addTodo, deleteTodo } from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => ({
    ...state,
    todos: [
      ...state.todos,
      { id: Date.now(), title: content, completed: false },
    ],
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
