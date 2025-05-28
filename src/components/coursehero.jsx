import React from "react";
import { FaPlus, FaSearch, FaBookOpen, FaUsers, FaClock } from "react-icons/fa";

const courses = [
  { id: 1, name: "Advanced Mathematics", teacher: "Dr. Sarah Wilson", students: 24, schedule: "Mon, Wed, Fri 9:00 AM", status: "Active" },
  { id: 2, name: "Physics Lab", teacher: "Prof. Michael Brown", students: 18, schedule: "Tue, Thu 2:00 PM", status: "Active" },
  { id: 3, name: "English Literature", teacher: "Ms. Emily Davis", students: 28, schedule: "Mon, Wed, Fri 11:00 AM", status: "On Hold" },
  { id: 4, name: "World History", teacher: "Mr. James Miller", students: 22, schedule: "Tue, Thu 10:00 AM", status: "Active" },
  { id: 5, name: "Chemistry", teacher: "Dr. Lisa Anderson", students: 20, schedule: "Mon, Wed, Fri 1:00 PM", status: "Active" },
  { id: 6, name: "Computer Science", teacher: "Mr. David Park", students: 25, schedule: "Daily 3:00 PM", status: "Active" },
];

export default function CourseHero() {
  return (
    <div className="p-6 space-y-6">
        
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Courses</h1>
          <p className="text-slate-600 mt-1">Manage curriculum and class schedules</p>
        </div>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <FaPlus className="mr-2" />
          Add Course
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaBookOpen className="text-purple-600 text-xl" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-semibold truncate">{course.name}</h2>
                  <p className="text-sm text-slate-600 truncate">{course.teacher}</p>
                </div>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  course.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {course.status}
              </span>
            </div>

            <div className="space-y-2 text-sm text-slate-600 mb-4">
              <div className="flex items-center gap-2">
                <FaUsers className="text-sm" />
                <span>{course.students} students enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-sm" />
                <span>{course.schedule}</span>
              </div>
            </div>

            <button className="w-full text-blue-600 border border-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 text-sm">
              Manage Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
