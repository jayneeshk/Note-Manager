import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import '@fontsource/poppins'; // Import Poppins font

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <h1>Note Manager</h1>
      </div>
      <div className={styles.hamburger} onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <ul
        className={`${styles.navbarLinks} ${isMobile ? styles.active : ''}`}
      >
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
