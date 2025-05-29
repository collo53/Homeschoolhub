import { FaBookOpen } from "react-icons/fa";

export default function Gradebook() {
  return (
    <div className="p-6 space-y-6">
     
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Gradebook</h1>
        <p className="text-slate-600 mt-1">Track and manage student grades</p>
      </div>

    
      <div className="flex flex-col items-center justify-center h-72 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 text-center">
        <div className="mb-4 animate-bounce text-[#ffc01d]">
          <FaBookOpen className="w-10 h-10" />
        </div>
        <h2 className="text-lg font-semibold text-slate-700">Coming Soon</h2>
        <p className="text-slate-500 mt-1">Gradebook functionality is under development. Stay tuned!</p>
      </div>
    </div>
  );
}
