import axios from 'axios';
import type { Todo } from '../types/allTypes';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export async function getTodos() {
  const response = await api.get('/todos');
  return response.data;
}

export async function createTodo(body: Todo) {
  const response = await api.post('/todos', body);
  return response.data;
}

export async function updateTodo(todo: Todo) {
  const response = await api.put(`/todos/${todo.id}`, todo);
  return response.data;
}

export async function deleteTodo(id: any) {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
}
