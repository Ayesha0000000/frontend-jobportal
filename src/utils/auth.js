// src/utils/auth.js

// Check if a user is logged in
export const isLoggedIn = () => {
  return !!localStorage.getItem('user');
};

// Get the logged-in user's name
export const getUsername = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.name || "User";
};

// Logout user and redirect
export const logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/login';
};

