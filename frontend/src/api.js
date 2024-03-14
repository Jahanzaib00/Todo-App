// api.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const fetchTodos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/todos/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch todos");
  }
};

const addTodo = async (username, title) => {
  try {
    const response = await axios.post(`${BASE_URL}/todos/${username}`, {
      title,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add todo");
  }
};

const updateTodo = async (username, id, title) => {
  try {
    const response = await axios.put(`${BASE_URL}/todos/${username}/${id}`, {
      title,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update todo");
  }
};

const deleteTodo = async (username, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/todos/${username}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete todo");
  }
};

export { fetchTodos, addTodo, updateTodo, deleteTodo };
