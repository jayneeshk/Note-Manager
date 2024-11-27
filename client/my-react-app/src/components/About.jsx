// src/components/About.js

import React from 'react';
import styles from '../styles/About.module.css'; // Add styles for about page

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About the Note Management App</h1>
      <p>
        This application allows users to create, manage, and organize notes. 
        Users can sign up, log in, and access their personalized notes dashboard. 
        The application supports features like adding, editing, deleting, 
        and pinning notes for easier access to important ones.
      </p>
      <p>
        Built with modern technologies like React, Node.js, Express, MongoDB, 
        and JWT authentication, this app ensures secure and personalized user experiences.
      </p>
    </div>
  );
};

export default About;
