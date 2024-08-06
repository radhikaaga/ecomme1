import React, { useState } from 'react';
import './Profile.css'; // Make sure you have this CSS file

const Profile = ({ isOpen, onClose }) => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '123 Main St, Hometown, USA'
  });

  return (
    <div className={`profile-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile-info">
          <div className="profile-item">
            <strong>Name:</strong> <span>{user.name}</span>
          </div>
          <div className="profile-item">
            <strong>Email:</strong> <span>{user.email}</span>
          </div>
          <div className="profile-item">
            <strong>Phone:</strong> <span>{user.phone}</span>
          </div>
          <div className="profile-item">
            <strong>Address:</strong> <span>{user.address}</span>
          </div>
        </div>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
