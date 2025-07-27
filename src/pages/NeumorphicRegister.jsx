import React, { useState } from 'react';
import './NeumorphicRegister.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const NeumorphicRegister = () => {
  const [role, setRole] = useState('jobseeker');

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ background: "#e0e5ec" }}>
      <div className="neumorphic neumorphic-card">
        <h1 className="mb-4">Register</h1>

        <div className="input-box">
          <input type="text" placeholder="Full Name" className="neumorphic-input" required />
          <i className="bx bxs-user icon"></i>
        </div>

        <div className="input-box">
          <input type="email" placeholder="Email" className="neumorphic-input" required />
          <i className="bx bxs-envelope icon"></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" className="neumorphic-input" required />
          <i className="bx bxs-lock-alt icon"></i>
        </div>

        <div className="input-box">
          <select className="neumorphic-input" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="jobseeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
          <i className="bx bxs-user-badge icon"></i>
        </div>

<button
  className="neumorphic-button mt-3"
  onClick={() => {
    localStorage.setItem("userRole", role);  // ✅ Save selected role
    window.location.href = "/profile";       // ✅ Redirect to profile form
  }}
>
  Sign Up
</button>


        <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
          Already have an account? <Link to="/login" className="text-primary fw-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default NeumorphicRegister;
