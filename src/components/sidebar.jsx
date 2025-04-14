import React from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa'; // Import icons


function Sidebar() {
  return (

    <div className=" w-screen  bg-[url('/first.jpg')] bg-center bg-cover text-white p-4  h-150 bg-fixed">
      <div className='flex justify-end mb-4'>
        <a href="">
          <p className='flex items-center text-white hover:text-blue-400 mr-3'>
            <FaInfoCircle className="text-2xl pr-2" />
            Register
          </p>
        </a>
        <a href="">
        <p className='flex items-center text-white hover:text-blue-400'>
        <FaHome  className="text-2xl pr-2" />
        Login
        </p>
        </a>
      </div>
     <div>
      <ul className="space-y-2 flex justify-center align-items-center ">
        <li className='flex items-center text-white'><a href="#" className="hover:text-[#ffc01d] pr-4">Home</a></li>
        <li className='!text-white'><a href="#" className=" hover:text-[#ffc01d] pr-4">About</a></li>
        <li><a href="#" className="hover:text-[#ffc01d] pr-4">Services</a></li>
        <li><a href="#" className="hover:text-[#ffc01d]">Contact</a></li>
      </ul>
      </div>

      <div className='flex flex-col justify-center items-center text-center mt-12 w-full max-w-2xl mx-auto'>
       
          <h1 className='text-2xl mb-4'>Learning Center for Your Kids</h1>
          <p className='text-sm leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, cupiditate et. Ducimus sed quaerat quod, dolorum distinctio quis et qui voluptatum accusantium excepturi quam. Dolore eveniet vel suscipit voluptate placeat!</p>
          <button className='p-6 bg-[#ffc01d] text-white '>Explore more</button>
        </div>
      </div>
  
    
  );
}

export default Sidebar;