import axios from 'axios';
import type { Todo } from '../types/allTypes';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
}

export const createTodo = async (body: Todo) => {
  const response = await api.post('/todos', body);
  return response.data;
}

export const updateTodo = async (todo: Todo) => {
  const response = await api.put(`/todos/${todo.id}`, todo);
  return response.data;
}

export const deleteTodo = async (id: any) => {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
}
