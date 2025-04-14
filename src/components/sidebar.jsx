import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa'; // Import icons

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <div className="w-screen bg-[url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover text-white p-4 h-auto bg-fixed">
      {/* Header with toggle button */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#ffc01d] font-bold font-sans text-3xl">
          HOMESCHOOL HUB
        </h2>
        <button
          className="text-white text-2xl sm:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links Section */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row justify-center sm:justify-end items-center sm:items-center mt-4`}
      >
        <a href="#" className="flex items-center text-white hover:text-blue-400 mr-3">
          <FaInfoCircle className="text-2xl pr-2" />
          Register
        </a>
        <a href="#" className="flex items-center text-white hover:text-blue-400">
          <FaHome className="text-2xl pr-2" />
          Login
        </a>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:block mt-4`}
      >
        <ul className="space-y-2 flex flex-col sm:flex-row justify-center items-center">
          <li className="flex items-center text-white">
            <a href="#" className="hover:text-[#ffc01d] pr-4">
              Home
            </a>
          </li>
          <li className="flex items-center text-white">
            <a href="#" className="hover:text-[#ffc01d] pr-4">
              About
            </a>
          </li>
          <li className="flex items-center text-white">
            <a href="#" className="hover:text-[#ffc01d] pr-4">
              Services
            </a>
          </li>
          <li className="flex items-center text-white">
            <a href="#" className="hover:text-[#ffc01d]">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col justify-center items-center text-center mt-12 w-full max-w-2xl mx-auto">
        <h1 className="text-2xl mb-4">Learning Center for Your Kids</h1>
        <p className="text-sm leading-7">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, cupiditate et. Ducimus sed quaerat quod, dolorum distinctio quis et qui voluptatum accusantium excepturi quam. Dolore eveniet vel suscipit voluptate placeat!
        </p>
        <button className="p-6 bg-[#ffc01d] text-white mt-4">Explore more</button>
      </div>
    </div>
  );
}

export default Sidebar;