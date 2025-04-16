import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";


function Hero(){
    return(
        <div className="w-screen ">
            <div className="flex flex-col md:flex-row justify-center items-center text-center bg-gradient-to-r from-black to-yellow-400 mx-auto h-auto md:h-screen px-6">
            {/* Text Section */}
                        <div className="w-full md:w-1/2 text-yellow-300 flex flex-col justify-center items-center md:items-start text-center mt-72  md:text-left ">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                            Learning Center for Your Kids
                            </h1>
                            <p className="text-sm sm:text-base leading-7 text-white max-w-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
                            cupiditate et. Ducimus sed quaerat quod, dolorum distinctio quis et qui
                            voluptatum accusantium excepturi quam. Dolore eveniet vel suscipit
                            voluptate placeat!
                            </p>
                            <button className="mt-6 px-6 py-3 bg-[#ffc01d] text-white rounded-md hover:bg-yellow-500 transition duration-300">
                            Explore more
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2  md:mt-0">
                            <img
                            src="https://images.unsplash.com/photo-1642072525068-69da5a1fabfc?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Kids Learning"
                            className="w-full h-64 md:h-96 object-cover object-center rounded-md"
                            />
                        </div>
            </div>

      </div>
    );
    
}
export default Hero;