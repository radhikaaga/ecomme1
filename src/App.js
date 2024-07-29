import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Signup } from './component/Signup';
import { Login } from './component/Login';
import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
