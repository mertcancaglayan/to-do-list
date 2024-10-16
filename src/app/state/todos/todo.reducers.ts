import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../models/todo.model';
import {
  addTodo,
  deleteTodo,
  loadTodos,
  saveTodosToLocalStorage,
} from './todo.actions';

export interface TodoState {
  todos: Todo[];
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
  todos:
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('todos') || '[]')
      : [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { content }) => {
    const newTodo: Todo = { id: Date.now(), title: content, completed: false };
    const updatedTodos = [...state.todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return { ...state, todos: updatedTodos };
  }),
  on(deleteTodo, (state, { id }) => {
    const updatedTodos = state.todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    return { ...state, todos: updatedTodos };
  }),
  on(loadTodos, (state) => {
    return {
      ...state,
      todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    };
  })
);
