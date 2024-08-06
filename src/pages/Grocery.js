import React from 'react';
import './Grocery.css'; // Import the CSS file for styling

const products = [
  {
    id: 1,
    name: 'Grocery Product 1',
    price: '$68.99',
    image: '/images/g3.jpg'
  },
  {
    id: 2,
    name: 'Grocery Product 2',
    price: '$98.99',
    image: '/images/g4.jpg'
  },
  {
    id: 3,
    name: 'Grocery Product 3',
    price: '$49.99',
    image: '/images/g5.jpg'
  },
  {
    id: 4,
    name: 'Grocery Product 4',
    price: '$60.99',
    image: '/images/g6.jpg'
  },
  {
    id: 5,
    name: 'Grocery Product 5',
    price: '$70.99',
    image: '/images/g7.jpg'
  },
  {
    id: 6,
    name: 'Grocery Product 6',
    price: '$80.99',
    image: '/images/g9.jpg'
  },
  {
    id: 7,
    name: 'Grocery Product 7',
    price: '$40.99',
    image: '/images/g10.jpg'
  },
  {
    id: 8,
    name: 'Grocery Product 8',
    price: '$85.99',
    image: '/images/g11.jpg'
  },
  {
    id: 9,
    name: 'Grocery Product 9',
    price: '$100.99',
    image: '/images/g12.jpg'
  },
  {
    id: 10,
    name: 'Grocery Product 10',
    price: '$150.99',
    image: '/images/g13.jpg'
  },
  {
    id: 11,
    name: 'Grocery Product 11',
    price: '$99.99',
    image: '/images/g14.jpg'
  },
  {
    id: 12,
    name: 'Grocery Product 12',
    price: '$70.99',
    image: '/images/g15.jpg'
  },
];

const Grocery = () => {
  return (
    <div className="grocery-container">
      <div className="top-image">
        <img src="/images/g2.jpg" alt="Grocery Products Banner" />
      </div>
      <h1>Grocery Products</h1>
      <div className="product-list">
        {products.map((product) => (
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

export default Grocery;
