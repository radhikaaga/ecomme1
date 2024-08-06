import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span>{isOpen ? '☰' : '☰'}</span> {/* Icon to represent open/close */}
      </button>
      <div className={`sidebar ${isOpen ? '' : 'hidden'}`}>
        <h2>Menu</h2>
        <ul>
          <li><a href="#home" className="link_text">Home</a></li>
          <li><a href="#products" className="link_text">Products</a></li>
          <li><a href="#about" className="link_text">About</a></li>
          <li><a href="#contact" className="link_text">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
