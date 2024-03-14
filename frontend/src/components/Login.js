import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = ({ setUsername }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      console.log(response);
      // Assuming the response contains the username
      setUsername(formData.username);
      navigate("/");
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error("Login error:", error);
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center align-items-center vh-100"
    >
      <div className="form-group mt-2" style={{ width: "40%" }}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter Username"
        />
      </div>
      <div className="form-group mt-2" style={{ width: "40%" }}>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div style={{ width: "40%", textAlign: "right" }}>
        <Link to="/signup">Create New Account</Link>
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
