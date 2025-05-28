import React from "react";  
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa"; 

function StudentHero() {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="  ">
                <h1 className="text-3xl text-black font-bold mb-4">Student</h1>
                        <p className="mb-4 text-black">Manage student enrollment and academic progress</p>
                        <form action="">
                            <input type="text" placeholder= " Search Students..." className="text-black bg-gray-300 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </form>
            </div>
            <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-600 transition-colors">
                <FaPlus />
            Add Student</button>
            </div>
       </div>
    );
}

export default StudentHero;