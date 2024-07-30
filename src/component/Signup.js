
import '../common/Common.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
export const Signup =()=>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      first: '',
      last: '',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { first, last, email, password } = formData;
    if (!first || !last || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }
        alert("signup successfull")
        navigate('/login');

      };
    

    return (
        <div className="main">
      <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>
        <div className="form-group">
          <label htmlFor="first">First Name:</label>
          <input type="text" id="first" name="first" value={formData.first} onChange={handleChange} />
          <FaUser className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input type="text" id="last" name="last" value={formData.last} onChange={handleChange} />
          <FaUser className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          <IoIosMail className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  value={formData.password} onChange={handleChange} />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>I agree to the terms and conditions</label>
        </div>
        <button type="submit">Submit</button>
        <div className='register-link'>
          <p>Already have an account? <a href='#'>Login</a></p>
        </div>
      </form>
    </div>
  
    )
}