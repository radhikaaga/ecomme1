import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Signup} from './component/Signup';
import {Login} from './component/Login';
import Dashboard from './common/dashboard/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>

      </Routes>
            </div>
  );
}

export default App;
