import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setShowDropdown(prev => !prev);

  return (
    <div className="w-full bg-black flex flex-col sm:flex-row justify-around text-white px-6 py-4 fixed z-50">
      {/* Logo and Mobile Menu Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#ffc01d] font-bold text-3xl">HOMESCHOOL HUB</h2>
        <button onClick={toggleMenu} className="sm:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Items */}
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
          
          {/* Portals Dropdown */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-[#ffc01d] focus:outline-none"
            >
              Portals
            </button>
            {showDropdown && (
              <ul className="absolute sm:left-0 sm:mt-2 w-40 bg-black shadow-lg rounded-md z-10 border-0">
                <li>
                  <Link
                    to="/pages/studentmain"
                    className="block px-4 py-2 text-white hover:text-[#ffc01d]"
                    onClick={() => setShowDropdown(false)} 
                  >
                    Student
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Principal"
                    className="block px-4 py-2 text-white hover:text-[#ffc01d]"
                    onClick={() => setShowDropdown(false)}
                  >
                    Principal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/teachermain"
                    className="block px-4 py-2 text-white hover:text-[#ffc01d]"
                    onClick={() => setShowDropdown(false)}
                  >
                    Teacher
                  </Link>
                </li>
              </ul>
            )}
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
