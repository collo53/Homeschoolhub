import React from "react";
import { Link } from "react-router-dom";
import {
  FaCertificate, FaSchool, FaChalkboard, FaGraduationCap,
  FaBook, FaCalendar, FaCalculator, FaEnvelope, FaServer, FaUsers
} from "react-icons/fa";

function AppSidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-black text-white flex flex-col items-center p-5 shadow-lg z-50">
      
      <div className="flex flex-col items-center mt-4">
        <FaCertificate className="text-[#ffc01d] text-6xl mb-3" />
        <h2 className="text-2xl font-bold">Principal Portal</h2>
        <p className="text-sm font-medium text-gray-400 text-center">Education Management</p>
      </div>

      
      <ul className="mt-10 space-y-5 w-full">
        <SidebarLink icon={<FaSchool />} label="Dashboard" to="/pages/Principal" />
        <SidebarLink icon={<FaChalkboard />} label="Teachers" to="/pages/teachers" />
        <SidebarLink icon={<FaGraduationCap />} label="Students" to="/pages/students" />
        <SidebarLink icon={<FaBook />} label="Courses" to="/pages/courses" />
        <SidebarLink icon={<FaCalculator />} label="Reports" to="/pages/reports" />
        <SidebarLink icon={<FaCalendar />} label="Calendar" to="/pages/calendar" />
        <SidebarLink icon={<FaEnvelope />} label="Messages" to="/pages/messages" />
        <SidebarLink icon={<FaServer />} label="Audit Logs" to="/pages/audit" />
        <SidebarLink icon={<FaUsers />} label="Account" to="/pages/account" />
      </ul>
    </div>
  );
}

function SidebarLink({ icon, label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-3 text-white hover:text-[#ffc01d] px-4 py-2 transition-colors"
      >
        <span className="text-lg">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default AppSidebar;
