import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = ({ username }) => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput setTodos={setTodos} username={username} />
          <TodoList todos={todos} setTodos={setTodos} username={username} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
