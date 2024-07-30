import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="#home" className="navbar-logo">Shop</a>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for products..." className="navbar-search" />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-right">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#products" className="navbar-link">Products</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="#contact" className="navbar-link">Contact</a>
        <a href="#cart" className="navbar-icon cart-icon">
          <span className="cart-icon-text">🛒</span> {/* Cart icon as text */}
          <span className="cart-count">3</span>
        </a>
        <a href="#profile" className="navbar-icon profile-icon">
          <span className="profile-icon-text">👤</span> {/* Profile icon as text */}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
