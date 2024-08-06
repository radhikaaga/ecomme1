import React from "react";
import './Product.css';
import Slideshow from '../component/Slideshow';
import CategoryNavbar from '../component/CategoryNavbar'; 

const Product = () => {
  return (
    <div>
    <CategoryNavbar /> {/* Add the category navbar */}
      <Slideshow />
      {/* Other product details */}
    </div>
  );
};

export default Product;