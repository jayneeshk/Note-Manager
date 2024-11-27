import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Login.module.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to the backend for login
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      // If login is successful, store the JWT token and update the state
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in localStorage
      setIsLoggedIn(true); // Update the logged-in state
      navigate("/notes"); // Redirect to notes page
    } catch (err) {
      // If error occurs, display the error message
      setErrorMessage(err.response?.data?.message || 'Error logging in');
      setIsLoggedIn(false); // Set logged-in state to false
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      {/* Display error message if login fails */}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Login;
