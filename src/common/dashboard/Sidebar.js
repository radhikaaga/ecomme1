import React, { useState } from 'react';
import './Dashboard.css';
import { RxCross1 } from "react-icons/rx";
import { HiOutlineBars3 } from "react-icons/hi2";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span>{isOpen ? <HiOutlineBars3 /> : <RxCross1 />}</span>
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
