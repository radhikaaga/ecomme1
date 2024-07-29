import React from 'react';
import '../common/Common.css'; 
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Signup successful");
        navigate('/login');
    };

    return (
        <div className="main">
            <form onSubmit={handleSubmit}>
                <h2>Signup Form</h2>
                <div className="form-group">
                    <label htmlFor="first">First Name:</label>
                    <input type="text" id="first" name="first" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last">Last Name:</label>
                    <input type="text" id="last" name="last" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
