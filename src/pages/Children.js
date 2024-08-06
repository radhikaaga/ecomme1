import React from 'react';
import './Children.css'; // Import the CSS file for styling

const products = [
  {
    id: 1,
    name: 'Children’s Product 1',
    price: '$19.99',
    image: './images/c1.jpg'
  },
  {
    id: 2,
    name: 'Children’s Product 2',
    price: '$29.99',
    image: './images/c2.jpg'
  },
  {
    id: 3,
    name: 'Children’s Product 3',
    price: '$39.99',
    image: './images/c3.jpg'
  },
  {
    id: 4,
    name: 'Children’s Product 4',
    price: '$39.99',
    image: './images/c4.jpg'
  },
  {
    id: 5,
    name: 'Children’s Product 5',
    price: '$39.99',
    image: './images/c6.jpg'
  },
  {
    id: 6,
    name: 'Children’s Product 6',
    price: '$39.99',
    image: './images/c7.jpg'
  },
  {
    id: 7,
    name: 'Children’s Product 7',
    price: '$39.99',
    image: './images/c8.jpg'
  },
  {
    id: 8,
    name: 'Children’s Product 8',
    price: '$39.99',
    image: './images/c9.jpg'
  },
 
];

const Children = () => {
  return (
    <div className="children-container">
      <h1>Children's Products</h1>
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

export default Children;
