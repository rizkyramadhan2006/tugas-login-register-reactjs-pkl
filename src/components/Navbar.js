// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/register" style={styles.link}>Register</Link>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '1rem',
    color: 'white'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px'
  }
};

export default Navbar;
