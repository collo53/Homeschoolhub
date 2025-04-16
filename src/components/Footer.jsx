import React from "react";

import { FaHome } from "react-icons/fa";
function Footer() {
    return(

        <div className="flex flex-col sm:flex-row justify-around items-start gap-8 sm:gap-0 px-6 py-10 bg-black text-white">
        
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have a Question</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaHome className="text-xl pr-2 mt-1" />
              <p>Odeon Cinema, Kenyatta Avenue, Nairobi</p>
            </li>
            <li className="flex items-start">
              <FaHome className="text-xl pr-2 mt-1" />
              <p>+254743707136</p>
            </li>
            <li className="flex items-start">
              <FaHome className="text-xl pr-2 mt-1" />
              <p>collinskamau09@gmail.com</p>
            </li>
          </ul>
        </div>
      
        
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      

    );
}
export default Footer;