// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Check if JWT is in localStorage
  
  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  // If token exists, render the children (the protected route)
  return children;
};

export default ProtectedRoute;
