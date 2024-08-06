import React from 'react';
import { FaSearch, FaShoppingCart, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; 
import { IoMdMenu } from 'react-icons/io';
import { GiShoppingCart } from "react-icons/gi"; 
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <IoMdMenu />
        </button>
        <Link to="/" className="navbar-logo">Shop</Link>
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for products" className="navbar-search" />
        <FaSearch />
      </div>
      <div className="navbar-right">
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/product" className="navbar-link">Products</Link>
        <Link to="/signup" className="navbar-link">Signup</Link>
        <Link to="/logout" className="navbar-link">
          <FaSignOutAlt /> {/* Logout icon */}
          Logout
        </Link>
        <Link to="/cart" className="navbar-icon cart-icon">
        <GiShoppingCart/> {/* Cart icon */}
          <span className="cart-count">3</span>
        </Link>
        <Link to="/profile" className="navbar-icon profile-icon">
        <FaUserCircle /> {/* Profile icon */}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
