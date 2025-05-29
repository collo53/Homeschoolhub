import React from "react";
import {
  FaPlus,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    date: "Nov 20, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Main Hall",
    type: "Meeting",
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    title: "Staff Meeting",
    date: "Nov 22, 2024",
    time: "3:30 PM - 4:30 PM",
    location: "Conference Room A",
    type: "Internal",
    color: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    title: "Science Fair",
    date: "Nov 25, 2024",
    time: "9:00 AM - 3:00 PM",
    location: "Gymnasium",
    type: "Event",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 4,
    title: "Board Meeting",
    date: "Nov 28, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Board Room",
    type: "Official",
    color: "bg-orange-100 text-orange-800",
  },
];

const todayEvents = [
  { title: "Morning Assembly", time: "8:00 AM", status: "completed" },
  { title: "Department Heads Meeting", time: "10:30 AM", status: "ongoing" },
  { title: "Budget Review", time: "2:00 PM", status: "upcoming" },
];

export default function TeacherCalendarHero() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Calendar</h1>
          <p className="text-slate-600 mt-1">Manage school events and appointments</p>
        </div>
        <button className="flex items-center bg-[#ffc01d] hover:bg-black text-black hover:text-white px-4 py-2 rounded-md text-sm">
          <FaPlus className="mr-2" />
          Add Event for Students
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b border-gray-200 flex items-center gap-2">
              <FaCalendarAlt className="text-slate-600" />
              <h2 className="text-lg font-semibold text-slate-900">Upcoming Events</h2>
            </div>
            <div className="p-5 space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900">{event.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${event.color}`}>
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaClock className="text-xs" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-sm text-black bg-[#ffc01d] border border-gray-300 px-3 py-1 rounded hover:bg-black hover:text-white">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div>
          <div className="bg-white rounded-lg shadow">
            <div className="p-5 border-b border-gray-200 flex items-center gap-2">
              <FaClock className="text-slate-600" />
              <h2 className="text-lg font-semibold text-slate-900">Today's Schedule</h2>
            </div>
            <div className="p-5 space-y-4">
              {todayEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      event.status === "completed"
                        ? "bg-green-500"
                        : event.status === "ongoing"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="font-medium text-slate-900">{event.title}</p>
                    <p className="text-sm text-slate-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
