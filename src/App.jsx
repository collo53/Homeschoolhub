import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import About from './pages/about'; 
import Services from './pages/services';
import './home.css'; 
import Contact from './pages/contact';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/services" element={<Services />} />
        <Route path="/pages/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;