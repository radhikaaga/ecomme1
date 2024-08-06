
import '../common/Common.css'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { signup } from '../services/apiServices';
export const Signup =()=>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
    try{
    const response =await signup(formData);
        alert("signup successfull");
        navigate('/login');
    }
    catch(error){
      alert('Error during signup,please try again.');
    }
  };
    

    return (
        <div className="main">
        <form onSubmit={handleSubmit}>
      <h2>Signup Form</h2>
        <div className="form-group">
          <label htmlFor="first">First Name:</label>
          <input type="text" 
          id="firstName" 
          name="firstName" 
          value={formData.first} 
          onChange={handleChange} />
          <FaUser className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input type="text"
           id="lastName"
            name="lastName"
            value={formData.last}
            onChange={handleChange} />
          <FaUser className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" 
          id="email" name="email" 
          value={formData.email} 
          onChange={handleChange} />
          <IoIosMail className='icon'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" 
          id="password" 
          name="password"  
          value={formData.password} 
          onChange={handleChange} />
          <FaLock className='icon'/>
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>I agree to the terms and conditions</label>
        </div>
        <button type="submit">Submit</button>
        <div className='register-link'>
          <p>Already have an account? <a href='/Login'>Login</a></p>
        </div>
      </form>
    </div>
  
    )
}