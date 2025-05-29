import { FaBookOpen, FaClock, FaCheckCircle, FaExclamationCircle, FaPlayCircle } from "react-icons/fa";

const StudentLessonHero = () => {
  const lessons = [
    {
      id: 1,
      title: "Introduction to Calculus",
      subject: "Mathematics",
      teacher: "Dr. Sarah Smith",
      dueDate: "2024-01-15",
      status: "completed",
      grade: "A-",
      duration: "45 mins",
      type: "video",
      description: "Basic concepts of derivatives and limits",
    },
    {
      id: 2,
      title: "Shakespeare's Hamlet Analysis",
      subject: "English Literature",
      teacher: "Ms. Emily Johnson",
      dueDate: "2024-01-18",
      status: "in-progress",
      progress: 60,
      duration: "30 mins",
      type: "reading",
      description: "Character analysis and themes in Hamlet",
    },
    {
      id: 3,
      title: "Newton's Laws of Motion",
      subject: "Physics",
      teacher: "Mr. Robert Brown",
      dueDate: "2024-01-20",
      status: "pending",
      duration: "60 mins",
      type: "video",
      description: "Understanding the three fundamental laws of motion",
    },
    {
      id: 4,
      title: "World War II Timeline",
      subject: "History",
      teacher: "Dr. Linda Davis",
      dueDate: "2024-01-22",
      status: "completed",
      grade: "A",
      duration: "40 mins",
      type: "reading",
      description: "Major events and turning points of WWII",
    },
    {
      id: 5,
      title: "Organic Chemistry Basics",
      subject: "Chemistry",
      teacher: "Prof. Michael Wilson",
      dueDate: "2024-01-25",
      status: "pending",
      duration: "50 mins",
      type: "video",
      description: "Introduction to carbon compounds and functional groups",
    },
    {
      id: 6,
      title: "Cell Division and Mitosis",
      subject: "Biology",
      teacher: "Dr. Jennifer Taylor",
      dueDate: "2024-01-16",
      status: "overdue",
      duration: "35 mins",
      type: "interactive",
      description: "Understanding cellular reproduction processes",
    },
  ];

  const getStatusBadge = (status, grade) => {
    switch (status) {
      case 'completed':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">Completed {grade && `- ${grade}`}</span>;
      case 'in-progress':
        return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">In Progress</span>;
      case 'pending':
        return <span className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full font-semibold">Pending</span>;
      case 'overdue':
        return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-semibold">Overdue</span>;
      default:
        return <span className="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full font-semibold">{status}</span>;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <FaCheckCircle className="text-green-600" />;
      case 'in-progress':
        return <FaPlayCircle className="text-blue-600" />;
      case 'overdue':
        return <FaExclamationCircle className="text-red-600" />;
      default:
        return <FaBookOpen className="text-gray-600" />;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'reading':
        return '📚';
      case 'interactive':
        return '🖥️';
      default:
        return '📄';
    }
  };

  return (
    <div className="space-y-8 p-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Lessons</h1>
        <p className="text-gray-600 mt-2">Track your learning progress and access lesson materials.</p>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="mt-1">{getStatusIcon(lesson.status)}</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.subject} • {lesson.teacher}</p>
                    </div>
                    {getStatusBadge(lesson.status, lesson.grade)}
                  </div>

                  <p className="text-gray-700 text-sm">{lesson.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaClock className="text-gray-500" />
                      {lesson.duration}
                    </span>
                    <span>{getTypeIcon(lesson.type)} {lesson.type}</span>
                    <span>Due: {new Date(lesson.dueDate).toLocaleDateString()}</span>
                  </div>

                  {lesson.status === 'in-progress' && lesson.progress && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-[#ffc01d] h-2 rounded-full" style={{ width: `${lesson.progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="ml-4">
                {lesson.status === 'completed' ? (
                  <button className="text-sm px-4 py-2 bg-[#ffc01d] border rounded-lg text-gray-700 hover:bg-black hover:text-white">Review</button>
                ) : (
                  <button className="text-sm px-4 py-2 bg-black text-white rounded-lg hover:bg-[#ffc01d] hover:text-black">
                    {lesson.status === 'in-progress' ? 'Continue' : 'Start'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLessonHero;
