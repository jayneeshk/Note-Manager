import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <h1>Note Management App</h1>
      {isLoggedIn && (
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
