import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar';
import Toggle from '../components/toggle';
import TeacherHero from '../components/teacherhero';
import TeacherInfo from '../components/teacherinfo';





function Teachers() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="w-screen min-h-screen flex bg-gray-100 relative overflow-hidden">
    
      <Toggle toggleSidebar={toggleSidebar} />

      
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-black text-white transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AppSidebar />
      </div>

     
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "pl-72" : "pl-0"}`}>
        <div className="pt-12 px-6 ">
          <TeacherHero />
          <TeacherInfo />
        </div>
        <div>
           
        </div>
      </div>
    </div>
  );
}
export default Teachers;