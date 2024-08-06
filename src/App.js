import React from 'react';
import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import { Logout } from './component/Logout';
import Dashboard from './common/dashboard/Dashboard';
import Home from './pages/Home';
import Product from './pages/Product';
import Navbar from './common/dashboard/Navbar';
import Men from './pages/Men'; 
import Women from './pages/Women'; 
import Children from './pages/Children'; 
import Grocery from './pages/Grocery'; 

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ['/product'];

  // Example: Replace with actual authentication check
  const isAuthenticated = true; 

  return (
    <div className="App">
      {/* Conditionally render Navbar */}
      {isAuthenticated && !hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/product" element={isAuthenticated ? <Product /> : <Navigate to="/login" />} />
        <Route path="/men" element={isAuthenticated ? <Men /> : <Navigate to="/login" />} />
        <Route path="/women" element={isAuthenticated ? <Women /> : <Navigate to="/login" />} />
        <Route path="/children" element={isAuthenticated ? <Children /> : <Navigate to="/login" />} />
        <Route path="/grocery" element={isAuthenticated ? <Grocery /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} /> {/* Fallback route */}
      </Routes>
    </div>
  );
}

export default App;
