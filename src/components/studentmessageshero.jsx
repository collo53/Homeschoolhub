import React from "react"
import { FaPlus, FaSearch, FaEnvelope, FaClock, FaUser } from "react-icons/fa"

const messages = [
  {
    id: 1,
    from: "Parent Council",
    subject: "Upcoming fundraising event planning",
    preview: "We would like to discuss the details for the upcoming fundraising...",
    time: "2 hours ago",
    unread: true,
    priority: "high",
  },
  {
    id: 2,
    from: "Dr. Sarah Wilson",
    subject: "Request for additional math resources",
    preview: "Could we schedule a meeting to discuss acquiring new mathematics...",
    time: "4 hours ago",
    unread: true,
    priority: "medium",
  },
  {
    id: 3,
    from: "School District Office",
    subject: "Policy update notification",
    preview: "Please review the updated attendance policy that goes into effect...",
    time: "1 day ago",
    unread: false,
    priority: "low",
  },
  {
    id: 4,
    from: "Ms. Emily Davis",
    subject: "Student behavioral concerns",
    preview: "I wanted to bring to your attention some concerns regarding...",
    time: "2 days ago",
    unread: false,
    priority: "high",
  },
]

const recentContacts = [
  { name: "Parent Council", lastContact: "2 hours ago" },
  { name: "Dr. Sarah Wilson", lastContact: "4 hours ago" },
  { name: "School Board", lastContact: "1 day ago" },
  { name: "Maintenance Team", lastContact: "3 days ago" },
]

export default function StudentMessagesHero() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Messages</h1>
          <p className="text-slate-600 mt-1">Communicate with staff, parents, and students</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-[#ffc01d] hover:text-black ">
          <FaPlus className="mr-2" />
          Compose
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search messages..."
            className="pl-10 pr-4 text-black py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white border rounded-lg shadow-sm">
            <div className="p-4 border-b flex items-center gap-2 text-slate-700 font-semibold text-lg">
              <FaEnvelope className=" text-[#ffc01d]" />
              Inbox
            </div>
            <div className="p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 rounded-lg border cursor-pointer hover:shadow-md transition-all ${
                    message.unread ? "bg-blue-50 border-blue-200" : "bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`font-semibold truncate ${message.unread ? "text-slate-900" : "text-slate-700"}`}>
                          {message.from}
                        </p>
                        {message.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        )}
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            message.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : message.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {message.priority}
                        </span>
                      </div>
                      <p className={`font-medium mb-1 truncate ${message.unread ? "text-slate-900" : "text-slate-700"}`}>
                        {message.subject}
                      </p>
                      <p className="text-sm text-slate-500 truncate">{message.preview}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 ml-4">
                      <FaClock className="h-3 w-3" />
                      <span>{message.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border rounded-lg shadow-sm">
            <div className="p-4 border-b flex items-center gap-2 text-slate-700 font-semibold text-lg">
              <FaUser />
              Recent Contacts
            </div>
            <div className="p-4 space-y-3">
              {recentContacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                      <FaUser className="text-slate-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{contact.name}</p>
                      <p className="text-xs text-slate-500">{contact.lastContact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
