import { useState } from "react"
import { FaPlus, FaCalendarAlt, FaClock, FaUsers, FaVideo, FaEdit, FaTrash } from "react-icons/fa"
import { format } from "date-fns"

const initialMeetings = [
  {
    id: 1,
    title: "Parent-Teacher Conference - John Smith",
    description: "Discuss John's progress in Algebra II",
    date: new Date("2024-11-25"),
    time: "14:00",
    duration: "30 minutes",
    participants: ["Mr. & Mrs. Smith"],
    meetingLink: "https://meet.google.com/abc-defg-hij",
    status: "scheduled",
  },
  {
    id: 2,
    title: "Study Group - Calculus",
    description: "Review session for upcoming exam",
    date: new Date("2024-11-22"),
    time: "16:00",
    duration: "60 minutes",
    participants: ["Sarah Johnson", "Mike Chen", "Emma Davis"],
    meetingLink: "https://zoom.us/j/123456789",
    status: "scheduled",
  }
]

export default function TeacherMeetingsHero() {
  const [meetings, setMeetings] = useState(initialMeetings)
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    duration: "30",
    participants: ""
  })

  const handleSubmit = () => {
    if (!formData.title || !formData.date || !formData.time) return

    const newMeeting = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      date: new Date(formData.date),
      time: formData.time,
      duration: `${formData.duration} minutes`,
      participants: formData.participants.split(',').map(p => p.trim()),
      meetingLink: `https://meet.google.com/${Math.random().toString(36).substr(2, 12)}`,
      status: "scheduled"
    }

    setMeetings([...meetings, newMeeting])
    setFormData({ title: "", description: "", date: "", time: "", duration: "30", participants: "" })
    setIsOpen(false)
  }

  const getStatusColor = (status) => {
    return status === "scheduled"
      ? "bg-blue-100 text-blue-700"
      : status === "ongoing"
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-700"
  }

  const todayMeetings = meetings.filter(m => m.date.toDateString() === new Date().toDateString())
  const upcomingMeetings = meetings.filter(m => m.status === "scheduled")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Online Meetings</h1>
          <p className="text-gray-600 mt-1">Schedule and manage your virtual meetings</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#ffc01d] text-black px-4 py-2 rounded hover:bg-black hover:text-white"
        >
          <FaPlus /> Schedule Meeting
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4 relative">
            <h2 className="text-xl font-semibold text-gray-900">Schedule New Meeting</h2>

            <input
              type="text"
              placeholder="Meeting Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <textarea
              placeholder="Description (optional)"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full border px-3 py-2 rounded"
              rows={2}
            />

            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full border px-3 py-2 rounded"
              />
              <input
                type="number"
                min="15"
                max="180"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full border px-3 py-2 rounded"
                placeholder="Duration (minutes)"
              />
            </div>

            <input
              type="text"
              placeholder="Participants (comma separated)"
              value={formData.participants}
              onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
              className="w-full border px-3 py-2 rounded"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-800">
              <FaVideo /> Upcoming Meetings
            </h3>
            {upcomingMeetings.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No upcoming meetings scheduled.</p>
            ) : (
              upcomingMeetings.map(meeting => (
                <div key={meeting.id} className="border p-4 rounded mb-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-900">{meeting.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded ${getStatusColor(meeting.status)}`}>
                          {meeting.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{meeting.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1"><FaCalendarAlt /> {format(meeting.date, "PPP")}</span>
                        <span className="flex items-center gap-1"><FaClock /> {meeting.time} ({meeting.duration})</span>
                        <span className="flex items-center gap-1"><FaUsers /> {meeting.participants.length} participants</span>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <a
                          href={meeting.meetingLink}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1 text-white bg-black rounded  hover:text-black flex items-center gap-1 text-sm"
                        >
                          <FaVideo /> Join
                        </a>
                        <button className="px-3 py-1 border rounded bg-[#ffc01d] text-black hover:text-white text-sm flex items-center gap-1">
                          <FaEdit /> Edit
                        </button>
                        <button className="px-3 py-1 border rounded text-sm flex items-center gap-1 text-red-600">
                          <FaTrash /> Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Today's Meetings + Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-gray-800">
              <FaClock /> Today’s Meetings
            </h3>
            {todayMeetings.length === 0 ? (
              <p className="text-center text-gray-500">No meetings today</p>
            ) : (
              todayMeetings.map(m => (
                <div key={m.id} className="p-3 bg-gray-50 rounded mb-3">
                  <h4 className="font-medium text-gray-900">{m.title}</h4>
                  <p className="text-sm text-gray-600">{m.time}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-green-700">
                      Join Now
                    </button>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(m.status)}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="bg-white rounded shadow p-4 space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Quick Actions</h3>
            <button className="w-full text-left px-3 py-2 border bg-black rounded hover:bg-[#ffc01d] flex items-center gap-2">
              <FaCalendarAlt /> View Calendar
            </button>
            <button className="w-full text-left px-3 py-2 border rounded bg-black hover:bg-[#ffc01d] flex items-center gap-2">
              <FaUsers /> Manage Participants
            </button>
            <button className="w-full text-left px-3 py-2 border rounded bg-black hover:bg-[#ffc01d] flex items-center gap-2">
              <FaVideo /> Test Meeting Room
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
