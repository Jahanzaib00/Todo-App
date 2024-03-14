// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup setUsername={setUsername} />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route
          path="/"
          element={
            username ? <Todo username={username} /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
