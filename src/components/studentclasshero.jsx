import { FaBookOpen, FaUsers, FaClock, FaCalendarAlt } from "react-icons/fa";

const StudentClassHero = () => {
  const classes = [
    {
      subject: "Mathematics",
      teacher: "Dr. Sarah Smith",
      schedule: "Mon, Wed, Fri - 9:00 AM",
      students: 28,
      nextClass: "Tomorrow 9:00 AM",
      progress: 75,
      grade: "A-",
      room: "Room 101",
    },
    {
      subject: "English Literature",
      teacher: "Ms. Emily Johnson",
      schedule: "Tue, Thu - 11:00 AM",
      students: 24,
      nextClass: "Today 11:00 AM",
      progress: 82,
      grade: "B+",
      room: "Room 205",
    },
    {
      subject: "Physics",
      teacher: "Mr. Robert Brown",
      schedule: "Mon, Wed, Fri - 2:00 PM",
      students: 22,
      nextClass: "Today 2:00 PM",
      progress: 68,
      grade: "B",
      room: "Lab 3",
    },
    {
      subject: "History",
      teacher: "Dr. Linda Davis",
      schedule: "Tue, Thu - 1:00 PM",
      students: 26,
      nextClass: "Thursday 1:00 PM",
      progress: 90,
      grade: "A",
      room: "Room 302",
    },
    {
      subject: "Chemistry",
      teacher: "Prof. Michael Wilson",
      schedule: "Mon, Wed - 10:00 AM",
      students: 20,
      nextClass: "Wednesday 10:00 AM",
      progress: 72,
      grade: "B+",
      room: "Lab 1",
    },
    {
      subject: "Biology",
      teacher: "Dr. Jennifer Taylor",
      schedule: "Tue, Fri - 3:00 PM",
      students: 25,
      nextClass: "Friday 3:00 PM",
      progress: 85,
      grade: "A-",
      room: "Lab 2",
    },
  ];

  const getGradeBadge = (grade) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-700";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-700";
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-700";
    return "bg-gray-200 text-gray-800";
  };

  return (
    <div className="space-y-8 p-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Classes</h1>
        <p className="text-gray-500 mt-2">
          View all your enrolled classes and track your progress.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {classItem.subject}
                </h2>
                <p className="text-gray-500 text-sm">{classItem.teacher}</p>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${getGradeBadge(
                  classItem.grade
                )}`}
              >
                {classItem.grade}
              </span>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500" />
                {classItem.schedule}
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-500" />
                {classItem.students} students
              </div>
              <div className="flex items-center gap-2">
                <FaBookOpen className="text-gray-500" />
                {classItem.room}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progress</span>
                <span>{classItem.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#ffc01d] h-2 rounded-full"
                  style={{ width: `${classItem.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t text-sm text-gray-500">
              <p className="mb-3">
                <FaCalendarAlt className="inline-block mr-2 text-gray-500" />
                Next class: {classItem.nextClass}
              </p>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#ffc01d] text-black rounded-lg hover:bg-black hover:text-white transition">
                  <FaBookOpen />
                  View Lessons
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border bg-black text-white border-gray-300 rounded-lg  hover:bg-[#ffc01d] hover:text-black transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentClassHero;
