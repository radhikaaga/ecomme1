
import '../common/Common.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
export const Login =()=>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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
        const { email, password } = formData;
    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }
        navigate('/dashboard');
      };
    

    return (
        <div className="main">
          <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
          <IoIosMail className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me </label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className='register-link'>
          <p>Don't have an account? <a href='#'>Signup</a></p>
        </div>
      </form>
    </div>
  );
  
}