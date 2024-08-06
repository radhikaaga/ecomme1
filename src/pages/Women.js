import React from 'react';
import './Women.css'; // Import the CSS file for styling

const products = [
  {
    id: 1,
    name: 'Dress 1',
    price: '$200.99',
    image: '/images/w1.jpg'
  },
  {
    id: 2,
    name: 'Dress 2',
    price: '$300.99',
    image: '/images/w2.jpg'
  },
  {
    id: 3,
    name: 'Dress 3',
    price: '$400.99',
    image: '/images/w3.jpg'
  },
  {
    id: 4,
    name: 'Dress 4',
    price: '$150.99',
    image: '/images/w4.jpg'
  },
  {
    id: 5,
    name: 'Shoes 1',
    price: '$175.99',
    image: '/images/w5.jpg'
  },
  {
    id: 6,
    name: 'Shoes 2',
    price: '$250.99',
    image: '/images/w6.jpg'
  },
  {
    id: 7,
    name: 'Shoes 3',
    price: '$280.99',
    image: '/images/w7.jpg'
  },
  {
    id: 8,
    name: 'Shoes 4',
    price: '$180.99',
    image: '/images/w8.jpg'
  },
  {
    id: 9,
    name: 'Accessory 1',
    price: '$220.99',
    image: '/images/w9.jpg'
  },
  {
    id: 10,
    name: 'Accessory 2',
    price: '$199.99',
    image: '/images/w10.jpg'
  }
];

const Women = () => {
  return (
    <div className="women-container">
      {/* Top Image */}
      <div className="top-image">
        <img src="/images/flipkart3.jpg" alt="Women's Products Banner" />
      </div>
      
      <h1>Women's Products</h1>
      
      {/* Product List - Dresses */}
      <div className="product-list">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Image */}
      <div className="middle-image">
        <img src="/images/flipkart5.jpg" alt="Women's Middle Ad Banner" />
      </div>

      {/* Product List - Shoes */}
      <div className="product-list">
        {products.slice(4, 8).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ad Image After Shoes */}
      <div className="ad-image">
        <img src="/images/flipkart8.jpg" alt="Women's Ad Banner" />
      </div>

      {/* Product List - Accessories */}
      <div className="product-list">
        {products.slice(8, 10).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
