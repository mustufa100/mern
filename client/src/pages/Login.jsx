import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth(); // Fixed hook usage

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login successful");
        storeTokenInLS(result.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert(result.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleInput}
        required
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleInput}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};
