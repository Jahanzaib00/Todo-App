const mysql = require("mysql");

// Create MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "todo_app_db",
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");

  // Create the Todos table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      username VARCHAR(255) NOT NULL
    )
  `;
  connection.query(createTableQuery, (err, result) => {
    if (err) {
      console.error("Error creating table: " + err.message);
      return;
    }
    console.log("Table created successfully");
  });

  // User schema
  const UserSchema = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
)
`;

  connection.query(UserSchema, (err, result) => {
    if (err) {
      console.error("Error creating users table: " + err.message);
      return;
    }
    console.log("Users table created successfully");
  });
});

module.exports = connection;
