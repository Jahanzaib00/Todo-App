// routes/todoRoutes.js
const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController.js");

// CRUD Operations
router.get("/:username", getTodos);
router.get("/:username//:id", getTodoById);
router.post("/:username", createTodo);
router.put("/:username/:id", updateTodo);
router.delete("/:username/:id", deleteTodo);

module.exports = router;
