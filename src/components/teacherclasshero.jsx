import { FaUser, FaSearch } from 'react-icons/fa';

const students = [
  { id: 1, name: "Alex Johnson", grade: "12th", class: "Calculus", gpa: 3.8, status: "Excellent" },
  { id: 2, name: "Emma Williams", grade: "11th", class: "Algebra II", gpa: 3.9, status: "Excellent" },
  { id: 3, name: "Michael Chen", grade: "12th", class: "AP Calculus BC", gpa: 4.0, status: "Outstanding" },
  { id: 4, name: "Sophia Rodriguez", grade: "11th", class: "Statistics", gpa: 3.7, status: "Good" },
  { id: 5, name: "David Thompson", grade: "12th", class: "Calculus", gpa: 3.5, status: "Good" },
  { id: 6, name: "Olivia Martinez", grade: "11th", class: "Algebra II", gpa: 3.6, status: "Good" },
];

export default function TeacherStudentsHero() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Students</h1>
          <p className="text-slate-600 mt-1">View and manage students across all your classes</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#ffc01d] flex items-center justify-center">
                  <FaUser className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-slate-900">{student.name}</h2>
                  <p className="text-sm text-slate-600">Grade {student.grade}</p>
                </div>
              </div>
              <span className={`
                text-xs font-medium px-2 py-1 rounded 
                ${student.status === "Outstanding"
                  ? "bg-green-100 text-green-800"
                  : student.status === "Excellent"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"}
              `}>
                {student.status}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Class:</span>
                <span className="font-medium">{student.class}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">GPA:</span>
                <span className="font-medium">{student.gpa}</span>
              </div>
            </div>

            <button className="mt-4 w-full text-black text-sm px-4 py-2 border border-slate-300 bg-[#ffc01d] hover:text-white rounded-md hover:bg-black">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
