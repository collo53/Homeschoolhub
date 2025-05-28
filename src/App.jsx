import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import About from './pages/about'; 
import Services from './pages/services';
import './home.css'; 
import Contact from './pages/contact';
import Principal from './pages/Principal';
import Teachers from './pages/teachers';
import Students from './pages/students';
import Courses from './pages/courses';
import Reports from './pages/reports';
import Calendar from './pages/calendar';
import Messages from './pages/messages';
import Account from './pages/account';
import Audit from './pages/audit';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about" element={<About />} />
        <Route path="/pages/services" element={<Services />} />
        <Route path="/pages/contact" element={<Contact />} />
        <Route path="/pages/Principal" element={<Principal/>} />
        <Route path="/pages/teachers" element={<Teachers/>} />
        <Route path="/pages/students" element={<Students/>} />
        <Route path="/pages/courses" element={<Courses/>} />
        <Route path="/pages/reports" element={<Reports/>} />
        <Route path="/pages/calendar" element={<Calendar/>} />
        <Route path="/pages/messages" element={<Messages/>} />
        <Route path="/pages/account" element={<Account/>} />
        <Route path="/pages/audit" element={<Audit/>} />

      </Routes>
    </Router>
  );
}

export default App;