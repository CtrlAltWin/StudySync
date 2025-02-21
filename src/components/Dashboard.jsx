import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShimmerDashboard from "./ShimmerDashboard";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses, fetchStudentById } from "../utils/api";
import { setUser, setLoading, setCourses } from "../utils/Slices/studentSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Assumed logged-in user ID
  const userId = 103;

  // Fetching required data and updating Redux store using IIFE inside useEffect
  useEffect(() => {
    (async () => {
      dispatch(setLoading(true));
      try {
        const allCourses = await fetchCourses();
        const loggedInStudent = await fetchStudentById(userId);
        const enrolledCourses = allCourses.filter((course) =>
          course.students.some((student) => student.id === loggedInStudent.id)
        );
        dispatch(setUser(loggedInStudent));
        dispatch(setCourses(enrolledCourses));
      } catch (error) {
        navigate("/error");
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, []);

  // subscribing to the Redux store
  const user = useSelector((state) => state.student.user);
  const courses = useSelector((state) => state.student.courses);
  const loading = useSelector((state) => state.student.loading);

  return (
    <div className="w-full pt-4 overflow-hidden h-[calc(100vh-5rem)] overflow-y-scroll overflow-x-hidden">
      <div className="bg-white p-8 shadow-xl rounded-xl max-w-6xl w-full mx-auto">
        {courses.length > 0 ? (
          <ul className="space-y-6">
            {/* welcome message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Welcome back, <span className="text-blue-500">{user.name}!</span>
            </h1>
            <h2 className="text-xl font-semibold text-white bg-gradient-to-r from-gray-400 to-gray-500 text-center rounded-lg p-3 mb-6 shadow-md">
              Your Enrolled Courses
            </h2>
            {courses.map((course) => {
              const student = course.students.find(
                (student) => student.id === user.id
              );
              const studentProgress = student?.progress || 0;
              return (
                <li
                  key={course.id}
                  className="flex flex-col sm:flex-row justify-between items-center p-5 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition"
                >
                  {/* Course Details */}
                  <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                    <img
                      src={course.thumbnail}
                      alt={course.name}
                      className="w-20 h-20 object-cover rounded-lg mr-5 border border-gray-300 shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {course.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Instructor: {course.instructor}
                      </p>
                      {/* Rating of course */}
                      <p className="flex items-center mt-2 w-12 bg-green-500 text-white text-sm  px-2 py-1 rounded-lg shadow">
                        {course.rating || "New"}⭐
                      </p>
                    </div>
                  </div>
                  {/* progress bar & mark as completed button - section */}
                  <div className="w-full sm:w-48">
                    {/* progress bar */}
                    <div className="w-full bg-gray-300 rounded-full h-3 shadow-inner">
                      <div
                        className={`h-3 rounded-full transition-all duration-300 ${
                          studentProgress >= 80
                            ? "bg-green-500"
                            : "bg-yellow-400"
                        }`}
                        style={{ width: `${studentProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-center text-sm text-gray-700 mt-2 font-medium">
                      Progress: {studentProgress}%
                    </p>

                    {/* mark as complete button and message */}
                    {studentProgress >= 80 && studentProgress < 100 ? (
                      <button className="mt-3 flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded-lg text-sm transition shadow-md">
                        Mark as Completed{" "}
                        <CheckIcon width={18} className="ml-2" />
                      </button>
                    ) : studentProgress < 80 ? (
                      <p className="mt-3 text-center text-sm text-blue-400 font-semibold">
                        Complete at least 80% to mark as completed.
                      </p>
                    ) : (
                      <p className="mt-3 text-center text-sm text-green-600 font-semibold flex items-center justify-center">
                        ✅ Marked as Completed
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : loading ? (
          <ShimmerDashboard />
        ) : (
          <p className="text-gray-500 text-center text-lg font-medium">
            You are not enrolled in any courses.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
