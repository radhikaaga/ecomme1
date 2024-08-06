import React from 'react';
import './Men.css'; // Add styling for Men page

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$200.99',
    image: '/images/m1.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$300.99',
    image: '/images/m2.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$400.99',
    image: '/images/m3.jpg'
  },
  {
    id: 4,
    name: 'Product 4',
    price: '$150.99',
    image: '/images/m4.jpg'
  },
  {
    id: 5,
    name: 'Product 5',
    price: '$175.99',
    image: '/images/m5.jpg'
  },
  {
    id: 7,
    name: 'Product 7',
    price: '$280.99',
    image: '/images/m7.jpg'
  },
  {
    id: 8,
    name: 'Product 8',
    price: '$180.99',
    image: '/images/m8.jpg'
  },
  {
    id: 9,
    name: 'Product 9',
    price: '$220.99',
    image: '/images/m9.jpg'
  },
  {
    id: 10,
    name: 'Product 10',
    price: '$199.99',
    image: '/images/m10.jpg'
  },
  {
    id: 11,
    name: 'Product 11',
    price: '$199.99',
    image: '/images/m11.jpg'
  },
  {
    id: 12,
    name: 'Product 12',
    price: '$199.99',
    image: '/images/m12.jpg'
  },
  {
    id: 13,
    name: 'Product 13',
    price: '$199.99',
    image: '/images/m13.jpg'
  }
];

const Men = () => {
  return (
    <div className="men-page">
      <div className="top-image">
        <img src="/images/flipkart6.jpg" alt="Men's Products Banner" />
      </div>
      
      <h1>Men's Products</h1>
      
      <div className="product-list">
        {products.slice(0, 6).map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
      
      {/* Middle Image Section */}
      <div className="middle-image">
        <img src="/images/flipkart2.jpg" alt="Middle Ad Banner" />
      </div>
      
      <div className="product-list">
        {products.slice(6).map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
