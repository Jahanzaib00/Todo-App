// TodoInput.js
import React, { useState } from "react";
import { addTodo, fetchTodos } from "../api";

const TodoInput = ({ setTodos, username }) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!item.trim()) {
      alert("Please enter a todo item!");
      return;
    }

    try {
      await addTodo(username, item);
      setItem("");
      const updatedTodos = await fetchTodos(username);
      setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card card-body my-3 text-center">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            value={item}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary mt-3">
          add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
