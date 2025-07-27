import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn, getUsername, logout } from '../utils/auth';
import './Navbar.css';

const Navbar = () => {
  const loggedIn = isLoggedIn();
  const username = getUsername();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm px-4">
      <Link className="navbar-brand fw-bold text-primary" to="/">JobConnect</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/">Home</Link>
          </li>

          {/* Only show Post Job if logged in */}
          {loggedIn && (
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/post-job">Post Job</Link>
            </li>
          )}

          {/* If not logged in, show Login/Register */}
          {!loggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/register">Register</Link>
              </li>
            </>
          ) : (
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">
                {username}
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
