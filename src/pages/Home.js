import React from 'react';
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/images/hero-banner.jpg" alt="Hero Banner" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Our Store</h1>
          <p>Find the best products for Men, Women, and more!</p>
        </div>
      </div>
      
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-list">
          <div className="category-card">
            <img src="/images/flipkart6.jpg" alt="Men's Category" className="category-image" />
            <h3>Men</h3>
          </div>
          <div className="category-card">
            <img src="/images/flipkart3.jpg" alt="Women's Category" className="category-image" />
            <h3>Women</h3>
          </div>
          <div className="category-card">
            <img src="/images/g2.jpg" alt="Grocery Category" className="category-image" />
            <h3>Grocery</h3>
          </div>
        </div>
      </div>

      <div className="featured-products-section">
        <h2>Featured Products</h2>
        <div className="featured-products-list">
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
