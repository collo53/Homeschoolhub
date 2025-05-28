import React from "react";
import { FaPlus, FaUser, FaSearch, FaGraduationCap } from "react-icons/fa";

const students = [
  { id: 1, name: "Alex Johnson", grade: "12th", gpa: 3.8, status: "Active", courses: 6 },
  { id: 2, name: "Emma Williams", grade: "11th", gpa: 3.9, status: "Active", courses: 7 },
  { id: 3, name: "Michael Chen", grade: "10th", gpa: 3.7, status: "Active", courses: 6 },
  { id: 4, name: "Sophia Rodriguez", grade: "12th", gpa: 4.0, status: "Honor Roll", courses: 8 },
  { id: 5, name: "David Thompson", grade: "9th", gpa: 3.5, status: "Active", courses: 5 },
  { id: 6, name: "Olivia Martinez", grade: "11th", gpa: 3.6, status: "Active", courses: 7 },
];

export default function StudentInfo() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Students</h1>
          <p className="text-slate-600 mt-1">Manage student enrollment and academic progress</p>
        </div>
        <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          <FaPlus className="mr-2" />
          Add Student
        </button>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="relative flex-1 max-w-sm text-black">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md   focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUser className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-black">{student.name}</h2>
                  <p className="text-sm text-slate-600">Grade {student.grade}</p>
                </div>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  student.status === "Honor Roll"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {student.status}
              </span>
            </div>

            <div className="text-sm mb-2 flex justify-between">
              <span className="text-slate-600">GPA:</span>
              <span className="font-semibold text-slate-900">{student.gpa}</span>
            </div>

            <div className="text-sm mb-4 flex justify-between">
              <span className="text-slate-600 flex items-center gap-1">
                <FaGraduationCap className="text-sm" />
                Courses:
              </span>
              <span className="font-semibold text-slate-900">{student.courses}</span>
            </div>

            <button className="w-full text-blue-600 border border-blue-600 px-3 py-1 rounded-md hover:bg-blue-50 text-sm">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
