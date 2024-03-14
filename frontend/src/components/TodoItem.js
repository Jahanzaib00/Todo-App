// TodoItem.js
import React, { useState } from "react";

const TodoItem = ({ todo, handleDelete, handleUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const handleSave = () => {
    handleUpdate(todo.id, updatedTitle);
    setEditing(false);
  };

  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      {editing ? (
        <>
          <input
            type="text"
            className="form-control text-capitalize"
            value={updatedTitle}
            onChange={handleChange}
          />
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleSave}>
              <i className="fas fa-check" />
            </span>
          </div>
        </>
      ) : (
        <>
          <h6>{todo.title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-pen" />
            </span>
            <span
              className="mx-2 text-danger"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fas fa-trash" />
            </span>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
