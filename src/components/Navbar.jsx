// src/components/Navbar.jsx
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import "./Navbar.css";

const API_BASE = process.env.REACT_APP_API || "http://localhost:5000";

function Navbar({ cartItemCount, onCartClick }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "",
    phone: "",
    email: "",
    place: "",
    district: "",
    password: "",
    confirmPassword: "",
  });

  const [signinPhone, setSigninPhone] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const dropdownRef = useRef(null);

  // ----------------- SIGNUP -----------------
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      return alert("Passwords do not match!");
    }
    try {
      const res = await fetch(`${API_BASE}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const data = await res.json();
      if (data.success) {
        alert("✅ Signup successful! Please sign in.");
        setShowSignup(false);
        setShowSignin(true);
        setSignupData({
          name: "",
          phone: "",
          email: "",
          place: "",
          district: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      alert("Signup failed. Server error.");
    }
  };

  // ----------------- SIGNIN -----------------
  const handleSigninSubmit = async () => {
    if (!signinPhone || !signinPassword) {
      return alert("Please enter email/phone and password");
    }
    try {
      const res = await fetch(`${API_BASE}/api/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneOrEmail: signinPhone,
          password: signinPassword,
        }),
      });
      const data = await res.json();

      if (data.success) {
        // ✅ success → save user, clear inputs
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setSigninPhone("");
        setSigninPassword("");
        setShowSignin(false);
        alert("✅ Signed in successfully!");
      } else {
        // ❌ failure → clear inputs
        setSigninPhone("");
        setSigninPassword("");
        alert(data.message || "Signin failed");
      }
    } catch (err) {
      console.error("Signin Error:", err);
      setSigninPhone(""); // also clear on server error
      setSigninPassword("");
      alert("❌ Failed to contact server. Check if API is running.");
    }
  };

  // ----------------- LOGOUT -----------------
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    alert("Logged out.");
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Sri Pathrakali Crackers
        </Link>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/after-payment">After Payment</Link>

          <button className="cart-button" onClick={onCartClick}>
            <ShoppingCart size={22} />
            <span style={{ marginLeft: 6 }}>{cartItemCount}</span>
          </button>

          <div className="auth-section" ref={dropdownRef}>
            {user ? (
              <div style={{ position: "relative" }}>
                <div
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="avatar"
                  title={user.name || user.phone}
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                </div>
                {dropdownOpen && (
                  <div className="dropdown">
                    <div className="dropdown-info">
                      <div className="dropdown-name">{user.name}</div>
                      <div className="dropdown-email">{user.phone}</div>
                      <div className="dropdown-email">{user.email}</div>
                    </div>
                    <hr />
                    <button onClick={handleLogout} className="logout-btn">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  className="auth-btn"
                  onClick={() => setShowSignup(true)}
                >
                  Sign Up
                </button>
                <button
                  className="auth-btn secondary"
                  onClick={() => {
                    setSigninPhone("");      // reset on open
                    setSigninPassword("");   // reset on open
                    setShowSignin(true);
                  }}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* ----------------- SIGNUP MODAL ----------------- */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                required
                placeholder="Name"
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
              />
              <input
                required
                placeholder="Phone"
                value={signupData.phone}
                onChange={(e) =>
                  setSignupData({ ...signupData, phone: e.target.value })
                }
              />
              <input
                required
                placeholder="Email"
                type="email"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
              />
              <input
                required
                placeholder="Place"
                value={signupData.place}
                onChange={(e) =>
                  setSignupData({ ...signupData, place: e.target.value })
                }
              />
              <input
                required
                placeholder="District"
                value={signupData.district}
                onChange={(e) =>
                  setSignupData({ ...signupData, district: e.target.value })
                }
              />
              <input
                required
                placeholder="Password"
                type="password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
              />
              <input
                required
                placeholder="Confirm Password"
                type="password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button type="submit" className="modal-btn">
                Submit
              </button>
            </form>
            <button className="close-btn" onClick={() => setShowSignup(false)}>
              ✖
            </button>
          </div>
        </div>
      )}

      {/* ----------------- SIGNIN MODAL ----------------- */}
      {showSignin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Sign In</h2>
            <input
              placeholder="Email or Phone"
              value={signinPhone}
              onChange={(e) => setSigninPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={signinPassword}
              onChange={(e) => setSigninPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSigninSubmit()}
            />
            <button onClick={handleSigninSubmit} className="modal-btn">
              Sign In
            </button>
            <button className="close-btn" onClick={() => setShowSignin(false)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
