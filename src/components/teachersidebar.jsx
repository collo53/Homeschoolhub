import React from "react";
import { Link } from "react-router-dom";
import {
  FaCertificate, FaSchool, FaChalkboard, FaGraduationCap,
  FaBook, FaCalendar, FaCalculator, FaEnvelope, FaServer, FaUsers
} from "react-icons/fa";

function TeacherSidebar () {
  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-black text-white flex flex-col items-center p-5 shadow-lg z-50">
      
      <div className="flex flex-col items-center mt-4">
        <FaCertificate className="text-[#ffc01d] text-6xl mb-3" />
        <h2 className="text-2xl font-bold">Teacher Portal</h2>
        <p className="text-sm font-medium text-gray-400 text-center">Student Management</p>
      </div>

      
      <ul className="mt-10 space-y-5 w-full">
        <SidebarLink icon={<FaSchool />} label="Dashboard" to="/pages/teachermain/" />
        <SidebarLink icon={<FaChalkboard />} label="My Classes" to="/pages/teacherclasses/" />
        <SidebarLink icon={<FaGraduationCap />} label="My Students" to="/pages/teacherstudents/" />
        <SidebarLink icon={<FaBook />} label="Assignments" to="/pages/teacherassignments/" />
        <SidebarLink icon={<FaCalculator />} label="Grades" to="/pages/teachergrades/" />
        <SidebarLink icon={<FaCalendar />} label="Calendar" to="/pages/teachercalendar/" />
        <SidebarLink icon={<FaEnvelope />} label="Messages" to="/pages/teachermessages/" />
        <SidebarLink icon={<FaServer />} label="Online meetings" to="/pages/teachermeetings/" />
        <SidebarLink icon={<FaUsers />} label="Account" to="/pages/teacheraccount/" />
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

export default TeacherSidebar;
