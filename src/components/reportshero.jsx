import React from "react";
import {
  FaFileAlt,
  FaDownload,
  FaChartLine,
  FaUsers,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

const reportTypes = [
  {
    title: "Academic Performance",
    description: "Student grades and progress reports",
    icon: FaChartLine,
    color: "bg-blue-100 text-blue-600",
    lastGenerated: "2 days ago",
  },
  {
    title: "Attendance Reports",
    description: "Student and teacher attendance analytics",
    icon: FaUsers,
    color: "bg-green-100 text-green-600",
    lastGenerated: "1 week ago",
  },
  {
    title: "Course Analytics",
    description: "Course enrollment and completion rates",
    icon: FaBookOpen,
    color: "bg-purple-100 text-purple-600",
    lastGenerated: "3 days ago",
  },
  {
    title: "Monthly Summary",
    description: "Comprehensive monthly school statistics",
    icon: FaCalendarAlt,
    color: "bg-orange-100 text-orange-600",
    lastGenerated: "1 month ago",
  },
];

const recentReports = [
  { name: "November Academic Report.pdf", date: "Nov 15, 2024", size: "2.4 MB" },
  { name: "Teacher Performance Q3.pdf", date: "Nov 10, 2024", size: "1.8 MB" },
  { name: "Student Attendance October.pdf", date: "Nov 5, 2024", size: "3.1 MB" },
  { name: "Course Completion Analysis.pdf", date: "Nov 1, 2024", size: "2.7 MB" },
];

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Reports</h1>
          <p className="text-slate-600 mt-1">Generate and view analytical reports</p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportTypes.map((report) => (
          <div key={report.title} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-lg ${report.color}`}>
                <report.icon className="text-xl" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">{report.title}</h2>
            </div>
            <p className="text-sm text-slate-600 mb-3">{report.description}</p>
            <p className="text-xs text-slate-500 mb-3">Last generated: {report.lastGenerated}</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-sm">
              Generate Report
            </button>
          </div>
        ))}
      </div>

     
      <div className="bg-white rounded-lg shadow">
        <div className="p-5 border-b border-gray-200 flex items-center gap-2">
          <FaFileAlt className="text-slate-600" />
          <h2 className="text-lg font-semibold text-slate-900">Recent Reports</h2>
        </div>
        <div className="p-5 space-y-4">
          {recentReports.map((report, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-red-100">
                  <FaFileAlt className="text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{report.name}</p>
                  <p className="text-sm text-slate-500">
                    {report.date} • {report.size}
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 border border-gray-300 px-3 py-1 text-sm text-black rounded-md hover:bg-gray-100">
                <FaDownload />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
