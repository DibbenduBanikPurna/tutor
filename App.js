import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import TutorServices from './component/TutorService/TutorServices';
import CheckOut from './component/CheckOut/CheckOut';
import Login from './component/Authentication/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<TutorServices />} />
        <Route path="/service/:id" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
