import React from 'react';
import './NeumorphicLogin.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const NeumorphicLogin = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "#e0e5ec" }}>
      <div className="neumorphic neumorphic-card">
        <h1 className="mb-4">Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" className="neumorphic-input" required />
          <i className="bx bxs-user icon"></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" className="neumorphic-input" required />
          <i className="bx bxs-lock-alt icon"></i>
        </div>

        <button className="neumorphic-button mt-3">Sign In</button>

        <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
          Don’t have an account? <Link to="/register" className="text-primary fw-bold">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default NeumorphicLogin;
