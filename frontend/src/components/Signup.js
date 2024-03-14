import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../api";

const Signup = ({ setUsername }) => {
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
      await signup(formData);
      setUsername(formData.username);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.error);
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
          type="text" // Changed type to "text" for non-email usernames
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
        <Link to="/login">Already have an account?</Link>
      </div>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
};

export default Signup;
