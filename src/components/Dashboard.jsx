import { useEffect, useState } from "react";
import { fetchCourses } from "../utils/api";
import ShimmerDashboard from "./ShimmerDashboard";
import { StarIcon } from "@heroicons/react/16/solid";
const Dashboard = () => {
  const [user, setUser] = useState({
    id: 113,
    name: "Saurabh Singh",
    progress: 45,
  }); // Mock User Data
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        const enrolledCourses = data.filter((course) =>
          course.students.some((student) => student.id === user.id)
        );
        setCourses(enrolledCourses);
      } catch (error) {
        console.error("Error fetching courses");
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, [user.id]);

  return (
    <div className="w-full h-full min-h-screen p-4 overflow-hidden mt-5">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Welcome back, <span className="text-blue-500">{user.name}</span> !
      </h1>

      {/* Enrolled Courses */}
      <div className="bg-white 50 p-6 shadow-md rounded-lg">
        {loading ? (
          <ShimmerDashboard />
        ) : courses.length > 0 ? (
          <ul className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-100 bg-blue-500 text-center rounded-lg p-1 mb-4">
              Your Enrolled Courses
            </h2>
            {courses.map((course) => (
              <li
                key={course.id}
                className="flex flex-col sm:flex-row justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{course.name}</h3>
                    <p className="text-gray-600 text-sm">
                      Instructor: {course.instructor}
                    </p>
                    <p className="flex mt-1 bg-blue-400 w-12 text-gray-100 text-sm px-2 rounded-lg">
                      {course.rating || "new"}
                      <StarIcon width={20} />
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-40">
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-green-400 h-2.5 rounded-full"
                      style={{
                        width: `${
                          course.students.find((s) => s.id === user.id)
                            ?.progress || 0
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">You are not enrolled in any courses.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
