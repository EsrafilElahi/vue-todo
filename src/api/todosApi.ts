import axios from 'axios';
import type { Todo } from '../types/allTypes';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
}

export const getTodo = async (id: any) => {
  const response = await api.get(`/todos/${id}`);
  return response.data;
}

export const createTodo = async (body: Omit<Todo, 'id'>) => {
  const response = await api.post('/todos', body);
  return response.data;
}

export const updateTodo = async (id: any, todo: Omit<Todo, 'id'>) => {
  const response = await api.put(`/todos/${id}`, todo);
  return response.data;
}

export const deleteTodo = async (id: any) => {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
}
