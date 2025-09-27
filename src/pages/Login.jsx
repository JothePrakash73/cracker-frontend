// src/components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE = process.env.REACT_APP_API || "https://cracker-backend-b8ff.onrender.com/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/login`, { email, password });
      alert(`✅ ${res.data.message}`);
    } catch (err) {
      alert(`❌ ${err.response?.data?.message || "Login failed"}`);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{ padding: "0.7rem", background: "#dd2476", color: "white", border: "none" }}
        >
          Login
        </button>

        <button
          type="button"
          style={{
            padding: "0.7rem",
            background: "#4CAF50",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
