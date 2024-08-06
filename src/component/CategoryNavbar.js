import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNavbar.css';

const CategoryNavbar = () => {
  return (
    <nav className="category-navbar">
      <div className="category-links">
        <Link to="/men" className="category-link">Men</Link>
        <Link to="/women" className="category-link">Women</Link>
        <Link to="/children" className="category-link">Children</Link>
        <Link to="/grocery" className="category-link">Grocery</Link>
        {/* Add other links as needed */}
      </div>
    </nav>
  );
};

export default CategoryNavbar;
