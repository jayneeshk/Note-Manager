// src/utils/token.js

// Store the token in localStorage
export const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  // Get the token from localStorage
  export const getToken = () => {
    return localStorage.getItem('authToken');
  };
  
  // Remove the token from localStorage (log out)
  export const removeToken = () => {
    localStorage.removeItem('authToken');
  };
  