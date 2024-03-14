// controllers/todoController.js
const db = require("../db");

// Get all todos
const getTodos = (req, res) => {
  const { username } = req.params;
  db.query(
    "SELECT * FROM todos WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(results);
    }
  );
};

// Get a todo by id
const getTodoById = (req, res) => {
  const { id, username } = req.params;
  db.query(
    "SELECT * FROM todos WHERE id = ? AND username = ?",
    [id, username],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.json(results[0]);
    }
  );
};

// Create a todo
const createTodo = (req, res) => {
  const { username } = req.params;
  const { title } = req.body;
  db.query(
    "INSERT INTO todos (title, username) VALUES (?, ?)",
    [title, username],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: results.insertId, title });
    }
  );
};

// Update a todo
const updateTodo = (req, res) => {
  const { id, username } = req.params;
  const { title } = req.body;
  db.query(
    "UPDATE todos SET title = ? WHERE id = ? AND username = ?",
    [title, id, username],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.json({ id, title });
    }
  );
};

// Delete a todo
const deleteTodo = (req, res) => {
  const { id, username } = req.params;
  db.query(
    "DELETE FROM todos WHERE id = ? AND username = ?",
    [id, username],
    (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (results.affectedRows === 0) {
        res.status(404).json({ message: "Todo not found" });
        return;
      }
      res.json({ message: "Todo deleted" });
    }
  );
};

module.exports = {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
