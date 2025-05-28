import React from "react";
import { FaPlus, FaCalculator, FaCalendar, FaBullhorn } from "react-icons/fa";

function DashboardInfo() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
        
      
        <div className="col-span-1 md:col-span-2 xl:col-span-2 xl:col-start-2 shadow-xl rounded-lg p-6 bg-white w-full lg:h-100  ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaPlus className="text-6xl text-blue-600 bg-blue-300 rounded-full p-3 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700 text-center">Add Student</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-amber-100 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaCalculator className="text-6xl text-blue-600 bg-amber-300 rounded-full p-3 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700 text-center">Generate Report</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-100 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaCalendar className="text-6xl text-blue-600 bg-red-300 rounded-full p-3 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700 text-center">Schedule Meetings</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-green-100 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <FaBullhorn className="text-6xl text-blue-600 bg-green-300 rounded-full p-3 mb-2" />
              <h2 className="text-lg font-semibold text-gray-700 text-center">Send Announcements</h2>
            </div>
          </div>
        </div>

        
        <div className="col-span-1 md:col-span-2 xl:col-span-2 shadow-xl bg-white rounded-lg p-6 h-[700px] overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
          <ul className="space-y-4">
            {[
              { user: "John Doe", action: "added a new student", time: "5 mins ago" },
              { user: "Jane Smith", action: "edited class details", time: "1 hour ago" },
              { user: "Admin", action: "removed a student", time: "2 hours ago" },
              { user: "Emily", action: "logged in", time: "Today, 9:30 AM" },
            ].map((activity, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-200 text-blue-800 flex items-center justify-center rounded-full font-bold text-lg">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardInfo;
