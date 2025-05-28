import React, { useState } from "react";
import AppSidebar from "../components/AppSidebar";
import Toggle from "../components/toggle";
import DashboardContent from "../components/DashboardContent";
import DashboardInfo from "../components/DashboardInfo";

function Principal() {
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
        <div className="pt-12 px-6">
          <DashboardContent />
          <DashboardInfo />
        </div>
      </div>
    </div>
  );
}

export default Principal;
