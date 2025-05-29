import { FaVideo, FaCalendarAlt, FaClock, FaUsers, FaExternalLinkAlt, FaRegPlayCircle } from "react-icons/fa";

const StudentMeetingsHero = () => {
  const upcomingMeetings = [
    {
      id: 1,
      title: "Mathematics Study Group",
      subject: "Mathematics",
      teacher: "Dr. Sarah Smith",
      date: "2024-01-16",
      time: "10:00 AM",
      duration: "60 mins",
      type: "Study Group",
      participants: 8,
      meetingLink: "https://meet.google.com/abc-defg-hij",
      status: "scheduled",
    },
    {
      id: 2,
      title: "Physics Lab Discussion",
      subject: "Physics",
      teacher: "Mr. Robert Brown",
      date: "2024-01-16",
      time: "2:30 PM",
      duration: "45 mins",
      type: "Lab Session",
      participants: 12,
      meetingLink: "https://zoom.us/j/123456789",
      status: "scheduled",
    },
    {
      id: 3,
      title: "English Literature Review",
      subject: "English Literature",
      teacher: "Ms. Emily Johnson",
      date: "2024-01-17",
      time: "11:00 AM",
      duration: "30 mins",
      type: "Review Session",
      participants: 6,
      meetingLink: "https://teams.microsoft.com/l/meetup-join/...",
      status: "scheduled",
    },
  ];

  const pastMeetings = [
    {
      id: 4,
      title: "History Project Presentation",
      subject: "History",
      teacher: "Dr. Linda Davis",
      date: "2024-01-15",
      time: "1:00 PM",
      duration: "90 mins",
      type: "Presentation",
      participants: 15,
      status: "completed",
      recording: "Available",
    },
    {
      id: 5,
      title: "Chemistry Lab Safety Training",
      subject: "Chemistry",
      teacher: "Prof. Michael Wilson",
      date: "2024-01-14",
      time: "9:00 AM",
      duration: "60 mins",
      type: "Training",
      participants: 20,
      status: "completed",
      recording: "Available",
    },
  ];

  const getStatusBadge = (status) => {
    const base = "px-2 py-1 text-xs rounded font-medium";
    switch (status) {
      case "scheduled":
        return <span className={`${base} bg-blue-100 text-blue-800`}>Scheduled</span>;
      case "live":
        return <span className={`${base} bg-green-100 text-green-800`}>Live Now</span>;
      case "completed":
        return <span className={`${base} bg-gray-100 text-gray-800`}>Completed</span>;
      default:
        return <span className={`${base} border text-gray-700`}>{status}</span>;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "Study Group":
        return "bg-blue-500";
      case "Lab Session":
        return "bg-purple-500";
      case "Review Session":
        return "bg-green-500";
      case "Presentation":
        return "bg-orange-500";
      case "Training":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Online Meetings</h1>
        <p className="text-gray-600 mt-2">Join virtual classes, study groups, and academic discussions.</p>
      </div>

      {/* Upcoming Meetings */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Upcoming Meetings</h2>
        <div className="space-y-4">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <div className={`p-3 rounded-lg ${getTypeColor(meeting.type)}`}>
                    <FaVideo className="text-white text-lg" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{meeting.title}</h3>
                        <p className="text-sm text-gray-600">
                          {meeting.subject} • {meeting.teacher}
                        </p>
                      </div>
                      {getStatusBadge(meeting.status)}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt />
                        {new Date(meeting.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {meeting.time} ({meeting.duration})
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUsers />
                        {meeting.participants} participants
                      </span>
                    </div>
                    <span className="inline-block border rounded px-2 py-1 text-xs">{meeting.type}</span>
                  </div>
                </div>
                <div className="ml-4 space-y-2 min-w-[150px]">
                  <a
                    href={meeting.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 text-sm px-3 py-1.5 bg-black text-white  rounded   transition"
                  >
                    <FaExternalLinkAlt />
                    Join Meeting
                  </a>
                  <button className="w-full inline-flex text-black items-center justify-center gap-2  bg-[#ffc01d] text-sm px-3 py-1.5 border rounded hover:bg-black hover:text-white transition">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Meetings */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Past Meetings</h2>
        <div className="space-y-4">
          {pastMeetings.map((meeting) => (
            <div key={meeting.id} className="border rounded-lg p-6 shadow hover:shadow-md transition-shadow bg-white">
              <div className="flex items-start justify-between">
                <div className="flex gap-4 flex-1">
                  <div className={`p-3 rounded-lg ${getTypeColor(meeting.type)} opacity-60`}>
                    <FaVideo className="text-white text-lg" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700">{meeting.title}</h3>
                        <p className="text-sm text-gray-500">
                          {meeting.subject} • {meeting.teacher}
                        </p>
                      </div>
                      {getStatusBadge(meeting.status)}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt />
                        {new Date(meeting.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock />
                        {meeting.time} ({meeting.duration})
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUsers />
                        {meeting.participants} participants
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block border rounded px-2 py-1 text-xs">{meeting.type}</span>
                      {meeting.recording && (
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Recording {meeting.recording}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  {meeting.recording && (
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 border text-black bg-[#ffc01d] rounded text-sm hover:bg-gray-100 transition">
                      <FaRegPlayCircle />
                      Watch Recording
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudentMeetingsHero;
