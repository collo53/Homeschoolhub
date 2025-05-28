import React from "react";
import { FaPlus, FaUser, FaEnvelope } from "react-icons/fa";

function TeacherInfo() {
  const teachers = [
    { id: 1, name: "Dr. Sarah Wilson", subject: "Mathematics", email: "s.wilson@school.edu", status: "Active", students: 124 },
    { id: 2, name: "Prof. Michael Brown", subject: "Science", email: "m.brown@school.edu", status: "Active", students: 98 },
    { id: 3, name: "Ms. Emily Davis", subject: "English", email: "e.davis@school.edu", status: "On Leave", students: 156 },
    { id: 4, name: "Mr. James Miller", subject: "History", email: "j.miller@school.edu", status: "Active", students: 87 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center">
                <FaUser className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{teacher.name}</h2>
                <p className="text-sm text-slate-600">{teacher.subject}</p>
              </div>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                teacher.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-orange-100 text-orange-800"
              }`}
            >
              {teacher.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
            <FaEnvelope className="h-4 w-4" />
            <span>{teacher.email}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Students: {teacher.students}</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              View Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeacherInfo;
