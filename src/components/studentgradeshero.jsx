import { FaAward, FaArrowUp, FaArrowDown, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';

const StudentGradesHero = () => {
  const currentGrades = [
    {
      subject: "Mathematics",
      teacher: "Dr. Sarah Smith",
      currentGrade: "A-",
      percentage: 91,
      trend: "up",
      assignments: [
        { name: "Calculus Quiz 1", grade: "A", points: 95, maxPoints: 100, date: "2024-01-10" },
        { name: "Homework Set 3", grade: "A-", points: 88, maxPoints: 100, date: "2024-01-08" },
        { name: "Midterm Exam", grade: "A-", points: 92, maxPoints: 100, date: "2024-01-05" },
      ],
    },
    {
      subject: "English Literature",
      teacher: "Ms. Emily Johnson",
      currentGrade: "B+",
      percentage: 87,
      trend: "stable",
      assignments: [
        { name: "Hamlet Essay", grade: "A-", points: 90, maxPoints: 100, date: "2024-01-12" },
        { name: "Poetry Analysis", grade: "B+", points: 85, maxPoints: 100, date: "2024-01-09" },
        { name: "Class Participation", grade: "B+", points: 86, maxPoints: 100, date: "2024-01-07" },
      ],
    },
    {
      subject: "Physics",
      teacher: "Mr. Robert Brown",
      currentGrade: "B",
      percentage: 83,
      trend: "down",
      assignments: [
        { name: "Lab Report 2", grade: "B-", points: 78, maxPoints: 100, date: "2024-01-11" },
        { name: "Motion Quiz", grade: "B+", points: 85, maxPoints: 100, date: "2024-01-06" },
        { name: "Problem Set 4", grade: "B", points: 82, maxPoints: 100, date: "2024-01-04" },
      ],
    },
    {
      subject: "History",
      teacher: "Dr. Linda Davis",
      currentGrade: "A",
      percentage: 94,
      trend: "up",
      assignments: [
        { name: "WWII Timeline Project", grade: "A", points: 97, maxPoints: 100, date: "2024-01-13" },
        { name: "Research Paper", grade: "A-", points: 92, maxPoints: 100, date: "2024-01-08" },
        { name: "Unit Test", grade: "A", points: 95, maxPoints: 100, date: "2024-01-03" },
      ],
    },
    {
      subject: "Chemistry",
      teacher: "Prof. Michael Wilson",
      currentGrade: "B+",
      percentage: 88,
      trend: "up",
      assignments: [
        { name: "Organic Chemistry Lab", grade: "A-", points: 90, maxPoints: 100, date: "2024-01-10" },
        { name: "Molecular Quiz", grade: "B+", points: 87, maxPoints: 100, date: "2024-01-05" },
        { name: "Homework 5", grade: "B+", points: 86, maxPoints: 100, date: "2024-01-02" },
      ],
    },
    {
      subject: "Biology",
      teacher: "Dr. Jennifer Taylor",
      currentGrade: "A-",
      percentage: 90,
      trend: "stable",
      assignments: [
        { name: "Cell Division Exam", grade: "A-", points: 89, maxPoints: 100, date: "2024-01-12" },
        { name: "Lab Practical", grade: "A", points: 94, maxPoints: 100, date: "2024-01-07" },
        { name: "Genetics Quiz", grade: "A-", points: 88, maxPoints: 100, date: "2024-01-04" },
      ],
    },
  ];

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'bg-green-100 text-green-800';
    if (grade.startsWith('B')) return 'bg-blue-100 text-blue-800';
    if (grade.startsWith('C')) return 'bg-yellow-100 text-yellow-800';
    if (grade.startsWith('D')) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getTrendIcon = (trend) => {
    if (trend === 'up') return <FaArrowUp className="h-4 w-4 text-green-600" />;
    if (trend === 'down') return <FaArrowDown className="h-4 w-4 text-red-600" />;
    return null;
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  const overallGPA = (currentGrades.reduce((sum, g) => sum + g.percentage, 0) / currentGrades.length / 100 * 4).toFixed(2);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Grades</h1>
        <p className="text-gray-600 mt-2">Track your academic performance across all subjects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Overall GPA</p>
              <p className="text-2xl font-bold text-gray-900">{overallGPA}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-500">
              <FaAward className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Current Classes</p>
              <p className="text-2xl font-bold text-gray-900">{currentGrades.length}</p>
            </div>
            <div className="p-3 rounded-lg bg-green-500">
              <FaBookOpen className="text-white w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Average Grade</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(currentGrades.reduce((sum, g) => sum + g.percentage, 0) / currentGrades.length)}%
              </p>
            </div>
            <div className="p-3 rounded-lg bg-purple-500">
              <FaArrowUp className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {currentGrades.map((subject, index) => (
          <div key={index} className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{subject.subject}</h3>
                <p className="text-sm text-gray-500">{subject.teacher}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-1 ${getTrendColor(subject.trend)}`}>
                  {getTrendIcon(subject.trend)}
                  <span className="text-sm font-medium">{subject.percentage}%</span>
                </div>
                <span className={`text-sm font-semibold px-2 py-1 rounded-full ${getGradeColor(subject.currentGrade)}`}>
                  {subject.currentGrade}
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div className="bg-[#ffc01d] h-2 rounded-full" style={{ width: `${subject.percentage}%` }}></div>
            </div>

            <div className="mt-4 space-y-3">
              <h4 className="font-medium text-gray-900">Recent Assignments</h4>
              {subject.assignments.map((a, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                  <div>
                    <h5 className="font-medium text-sm">{a.name}</h5>
                    <p className="text-xs text-gray-500">
                      <FaCalendarAlt className="inline mr-1 w-3 h-3" />
                      {new Date(a.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-semibold px-2 py-1 rounded-full ${getGradeColor(a.grade)}`}>{a.grade}</span>
                    <p className="text-xs text-gray-600 mt-1">{a.points}/{a.maxPoints}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button className="w-full py-2 text-sm border bg-black text-white hover:bg-[#ffc01d] hover:text-black rounded-md text-gray-700  transition">
                View All Assignments
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentGradesHero;
