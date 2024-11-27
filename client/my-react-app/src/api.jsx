import axios from 'axios';
import BASE_URL from './config';

const api = axios.create({
  baseURL: BASE_URL,
});

// Add token to headers automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Authentication APIs
export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const signup = async (name, email, password) => {
  const response = await api.post('/auth/signup', { name, email, password });
  return response.data;
};

// Notes APIs
export const fetchNotes = async () => {
  const response = await api.get('/api/notes');
  return response.data;
};

export const createNote = async (note) => {
    try {
      const response = await api.post('/api/notes', note);  // The token will be sent automatically due to interceptor
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Error creating note'; // Handle the error properly
    }
  };

export const deleteNote = async (id) => {
  const response = await api.delete(`api/notes/${id}`);
  return response.data;
};

export const updateNote = async (id, note) => {
  const response = await api.put(`api/notes/${id}`, note);
  return response.data;
};
