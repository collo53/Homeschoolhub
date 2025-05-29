import { FaBookOpen, FaUsers, FaCalendarAlt, FaCommentDots } from 'react-icons/fa';

const stats = [
  {
    title: "My Classes",
    value: "6",
    change: "3 today",
    icon: <FaBookOpen className="h-5 w-5 text-green-600" />,
    bgColor: "bg-green-50",
  },
  {
    title: "Total Students",
    value: "124",
    change: "2 new this week",
    icon: <FaUsers className="h-5 w-5 text-blue-600" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Upcoming Classes",
    value: "3",
    change: "Next: 2:00 PM",
    icon: <FaCalendarAlt className="h-5 w-5 text-purple-600" />,
    bgColor: "bg-purple-50",
  },
  {
    title: "Unread Messages",
    value: "8",
    change: "3 from parents",
    icon: <FaCommentDots className="h-5 w-5 text-orange-600" />,
    bgColor: "bg-orange-50",
  },
];

const upcomingClasses = [
  { time: "9:00 AM", subject: "Algebra II", room: "Room 201", students: 28 },
  { time: "11:00 AM", subject: "Calculus", room: "Room 203", students: 22 },
  { time: "2:00 PM", subject: "Statistics", room: "Room 201", students: 25 },
];

const recentActivity = [
  { action: "Graded assignments for Algebra II", time: "30 minutes ago" },
  { action: "Posted new homework for Calculus", time: "2 hours ago" },
  { action: "Replied to parent message", time: "4 hours ago" },
  { action: "Updated lesson plan for Statistics", time: "Yesterday" },
];

export default function TeachersDashboardHero() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back, Dr. Wilson</h1>
          <p className="text-slate-600 mt-1">Here's what's happening with your classes today</p>
        </div>
        <div className="text-sm text-slate-500">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between pb-2">
              <div className="text-sm font-medium text-slate-600">{stat.title}</div>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <p className="text-xs text-slate-500 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Schedule and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b px-4 py-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-700">
              <FaCalendarAlt className="h-5 w-5 text-slate-600" />
              Today's Schedule
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {upcomingClasses.map((class_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
              >
                <div>
                  <div className="font-medium text-slate-900">{class_.subject}</div>
                  <div className="text-sm text-slate-600">
                    {class_.room} • {class_.students} students
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-900">{class_.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b px-4 py-3">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-700">
              <FaCommentDots className="h-5 w-5 text-slate-600" />
              Recent Activity
            </h2>
          </div>
          <div className="p-4 space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-sm text-slate-900">{activity.action}</div>
                  <div className="text-xs text-slate-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
