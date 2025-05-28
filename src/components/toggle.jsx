import React from "react";
import { FaBars } from "react-icons/fa";

function Toggle({ toggleSidebar }) {
  return (
    <button
      onClick={toggleSidebar}
      className="fixed top-4 left-4 z-50 text-white bg-black p-3 rounded-lg shadow-md hover:bg-[#ffc01d] transition-all"
    >
      <FaBars className="text-xl" />
    </button>
  );
}

export default Toggle;
