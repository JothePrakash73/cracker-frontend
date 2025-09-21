import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for page navigation

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // navigation hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
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

        {/* Signup Button */}
        <button
          type="button"
          style={{
            padding: "0.7rem",
            background: "#4CAF50",
            color: "white",
            border: "none",
          }}
          onClick={() => navigate("/register")} // navigate to register page
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
