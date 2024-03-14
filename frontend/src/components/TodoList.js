import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { fetchTodos, deleteTodo, updateTodo } from "../api";

const TodoList = ({ username, todos, setTodos }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTodos(username);
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(username, id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id, updatedTitle) => {
    try {
      await updateTodo(username, id, updatedTitle);
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, title: updatedTitle };
          }
          return todo;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const clearList = async () => {
    try {
      await Promise.all(todos.map((todo) => deleteTodo(username, todo.id)));
      setTodos([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button>
    </ul>
  );
};

export default TodoList;
