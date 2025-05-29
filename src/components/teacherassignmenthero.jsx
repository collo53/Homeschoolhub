import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";

const assignments = [
  { id: 1, title: "Quadratic Equations Worksheet", class: "Algebra II", dueDate: "2024-01-15", status: "Active", submitted: 22, total: 28 },
  { id: 2, title: "Derivative Practice Problems", class: "Calculus", dueDate: "2024-01-18", status: "Active", submitted: 18, total: 22 },
  { id: 3, title: "Statistics Project", class: "Statistics", dueDate: "2024-01-22", status: "Draft", submitted: 0, total: 25 },
];

export default function TeacherAssignmentHero() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Assignments</h1>
          <p className="text-slate-600 mt-1">Create and manage assignments for your classes</p>
        </div>
        <button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm font-medium">
          Create Assignment
        </button>
      </div>

      {/* Assignment List */}
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <FaBookOpen className="h-5 w-5 text-slate-600" />
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{assignment.title}</h2>
                  <p className="text-sm text-slate-600">{assignment.class}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`
                  text-xs px-2 py-1 rounded font-medium
                  ${assignment.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-slate-200 text-slate-700"}
                `}>
                  {assignment.status}
                </span>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <FaCalendarAlt className="h-4 w-4" />
                  Due: {assignment.dueDate}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                {assignment.submitted}/{assignment.total} submissions
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-md text-black bg-[#ffc01d] hover:text-white  border border-slate-300 hover:bg-black">
                  View Submissions
                </button>
                <button className="px-3 py-1 text-sm rounded-md bg-black hover:bg-[#ffc01d] text-white">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
