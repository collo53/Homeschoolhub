import {
  FaBookOpen,
  FaCalendarAlt,
  FaClock,
  FaVideo,
  FaUsers,
  FaComments
} from "react-icons/fa";

const StudentsDashboard = () => {
  const upcomingClasses = [
    { subject: "Mathematics", time: "9:00 AM", teacher: "Dr. Smith", room: "Room 101" },
    { subject: "English Literature", time: "11:00 AM", teacher: "Ms. Johnson", room: "Room 205" },
    { subject: "Physics", time: "2:00 PM", teacher: "Mr. Brown", room: "Lab 3" },
  ];

  const recentLessons = [
    { subject: "History", topic: "World War II", completed: true, grade: "A-" },
    { subject: "Chemistry", topic: "Organic Compounds", completed: true, grade: "B+" },
    { subject: "Biology", topic: "Cell Division", completed: false, dueDate: "Tomorrow" },
  ];

  const quickStats = [
    { title: "Current Classes", value: "6", icon: <FaBookOpen />, color: "bg-blue-500" },
    { title: "Completed Lessons", value: "24", icon: <FaBookOpen />, color: "bg-green-500" },
    { title: "Upcoming Meetings", value: "3", icon: <FaVideo />, color: "bg-purple-500" },
    { title: "Unread Messages", value: "5", icon: <FaComments />, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
        <p className="text-gray-600 mt-2">Here's what's happening with your studies today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
              <FaCalendarAlt className="text-gray-600" />
              Today's Schedule
            </div>
            <p className="text-sm text-gray-500 mt-1">Your classes for today</p>
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((classItem, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{classItem.subject}</h3>
                  <p className="text-sm text-gray-600">
                    {classItem.teacher} • {classItem.room}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center text-sm font-medium text-gray-700 border rounded-full px-2 py-1">
                    <FaClock className="mr-1 h-3 w-3" />
                    {classItem.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Lessons */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
              <FaBookOpen className="text-gray-600" />
              Recent Lessons
            </div>
            <p className="text-sm text-gray-500 mt-1">Your latest lesson activities</p>
          </div>
          <div className="space-y-4">
            {recentLessons.map((lesson, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{lesson.subject}</h3>
                  <p className="text-sm text-gray-600">{lesson.topic}</p>
                </div>
                <div className="text-right">
                  {lesson.completed ? (
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {lesson.grade}
                    </span>
                  ) : (
                    <span className="text-sm border border-orange-500 text-orange-600 px-3 py-1 rounded-full">
                      Due {lesson.dueDate}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
          <p className="text-sm text-gray-500">Commonly used features</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center h-24 border rounded-lg hover:bg-gray-100 transition">
            <FaVideo className="h-6 w-6 mb-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-800">Join Meeting</span>
          </button>
          <button className="flex flex-col items-center justify-center h-24 border rounded-lg hover:bg-gray-100 transition">
            <FaComments className="h-6 w-6 mb-2 text-orange-600" />
            <span className="text-sm font-medium text-gray-800">Send Message</span>
          </button>
          <button className="flex flex-col items-center justify-center h-24 border rounded-lg hover:bg-gray-100 transition">
            <FaBookOpen className="h-6 w-6 mb-2 text-green-600" />
            <span className="text-sm font-medium text-gray-800">View Assignments</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentsDashboard;
