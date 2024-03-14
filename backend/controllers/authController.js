const db = require("../db");

const signup = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  // Check if the username already exists
  const checkUserQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkUserQuery, [username], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (results.length > 0) {
      // Username already exists, return an error
      res.status(400).json({ error: "Username is already taken" });
      return;
    }
    // Insert user data into the database
    const insertUserQuery =
      "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(insertUserQuery, [username, password], (insertErr, result) => {
      if (insertErr) {
        res.status(500).json({ error: insertErr.message });
        return;
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    const user = results[0];
    if (!user) {
      res.status(401).json({ message: "Invalid username or password" });
      return;
    }
    res.json({ message: "Login successful" });
  });
};

module.exports = { signup, login };
