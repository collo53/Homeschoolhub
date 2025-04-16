import React from 'react';
import { Link } from 'react-router-dom';

function AboutServices() { 

    return (
        <div className="flex flex-col justify-center items-center "> 
         
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 w-full bg-neutral-200 px-6 py-10 md:px-20 md:py-20 leading-9">
          
                <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-[#ffc01d] text-3xl font-bold mb-4"> Preschool & Kindergarten Readiness                </h1>
                <p className="text-black text-base mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
                </p>
                <ul className="text-black space-y-2">
                    <li><span className="text-[#ffc01d] mr-2">✓</span>Learning through play and exploration</li>
                    <li><span className="text-[#ffc01d] mr-2">✓</span>Exploring knowledge</li>
                    <li><span className="text-[#ffc01d] mr-2">✓</span>Creative learning</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="bg-[#ffc01d] text-white px-6 py-2 rounded-md hover:bg-black transition-all">
                    Admission
                    </button>
                    <button className="text-[#ffc01d] border border-[#ffc01d] px-6 py-2 rounded-md hover:bg-[#ffc01d] hover:text-white transition-all">
                    Learn More
                    </button>
                </div>
                </div>
      
           
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1727553957823-a54c8ff6a3ff"
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
      
          
          <div className="mt-0 flex flex-col-reverse md:flex-row justify-center items-center gap-12 w-full  px-6 py-10 md:px-20 md:py-20 leading-9">
          <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Vision"
                className="w-full h-100 object-cover rounded-lg shadow-md"
              />
            </div>
         
            <div className="flex flex-col w-full md:w-1/2">
              <h1 className="text-[#ffc01d] text-3xl font-bold mb-4">Our Vision</h1>
              <p className="text-black text-base mb-4">
                Empowering kids with creativity and curiosity to explore a brighter future.
              </p>
              <ul className="text-black space-y-2">
                <li><span className="text-[#ffc01d] mr-2">✓</span>Interactive classes</li>
                <li><span className="text-[#ffc01d] mr-2">✓</span>Skilled educators</li>
                <li><span className="text-[#ffc01d] mr-2">✓</span>Fun-based learning</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="bg-[#ffc01d] text-white px-6 py-2 rounded-md hover:bg-black transition-all">
                  Admission
                </button>
                <button className="text-[#ffc01d] border border-[#ffc01d] px-6 py-2 rounded-md hover:bg-[#ffc01d] hover:text-white transition-all">
                  Learn More
                </button>
              </div>
            </div>
      
            
           
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-12 w-full bg-neutral-200 px-6 py-10 md:px-20 md:py-20 leading-9">
          
                <div className="flex flex-col w-full md:w-1/2">
                <h1 className="text-[#ffc01d] text-3xl font-bold mb-4"> Creative Free Play                </h1>
                <p className="text-black text-base mb-4">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
                </p>
                <ul className="text-black space-y-2">
                    <li><span className="text-[#ffc01d] mr-2">✓</span>Self-led exploration </li>
                    <li><span className="text-[#ffc01d] mr-2">✓</span>Problem-solving through play</li>
                    <li><span className="text-[#ffc01d] mr-2">✓</span>Creative learning</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="bg-[#ffc01d] text-white px-6 py-2 rounded-md hover:bg-black transition-all">
                    Admission
                    </button>
                    <button className="text-[#ffc01d] border border-[#ffc01d] px-6 py-2 rounded-md hover:bg-[#ffc01d] hover:text-white transition-all">
                    Learn More
                    </button>
                </div>
                </div>
      
           
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1727553957823-a54c8ff6a3ff"
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      );
      
}                                                    
export default AboutServices;