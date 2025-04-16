import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full bg-black flex flex-col sm:flex-row justify-around text-white px-6 py-4 fixed z-50">

    
      <div className="flex justify-between items-center">
        <h2 className="text-[#ffc01d] font-bold text-3xl">
          HOMESCHOOL HUB
        </h2>
        <button onClick={toggleMenu} className="sm:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

     
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:justify-between sm:items-center mt-4`}
      >
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-white text-lg text-center sm:text-left">
          <li>
            <a href="#" className="hover:text-[#ffc01d]">Home</a>
          </li>
          <li>
            <Link to="/pages/about" className="hover:text-[#ffc01d]">About</Link>
          </li>
          <li>
          <Link to="/pages/services" className="hover:text-[#ffc01d]">Services</Link>

          </li>
          <li>
          <Link to="/pages/contact" className="hover:text-[#ffc01d]">Contact</Link>
          </li>
        </ul>
        </div>

        {/* Register/Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-0 items-center">
          <a href="#" className="flex items-center hover:text-blue-400">
            <FaInfoCircle className="mr-2" />
            Register
          </a>
          <a href="#" className="flex items-center hover:text-blue-400">
            <FaHome className="mr-2" />
            Login
          </a>
        </div>
      
    </div>
  );
}

export default Navbar;
