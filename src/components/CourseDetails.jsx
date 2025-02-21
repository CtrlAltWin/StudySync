import { useEffect, useState } from "react";
import { fetchCourseById } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import ShimmerCourseDetails from "./ShimmerCourseDetails";
import { useNavigate, useParams } from "react-router-dom";
import { setCourse, setLoading } from "../utils/Slices/courseDetailsSlice";

const CourseDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetching data and updating redux store
  useEffect(() => {
    (async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchCourseById(Number(id));
        dispatch(setCourse(data));
      } catch (error) {
        navigate("/error");
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, []);

  // subscribing to the redux store
  const { course, loading } = useSelector((store) => store.courseDetails);

  // showing shimmer UI until data is being fetched
  if (loading) {
    return <ShimmerCourseDetails />;
  }

  // if no course of a particular id exists
  if (!course) {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Course not found.
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-5rem)] overflow-y-scroll overflow-x-hidden">
      <div className="w-full max-w-4xl mx-auto p-2 shadow-lg hover:bg-gray-50 rounded-lg scale-95">
        {/* course image */}
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-full h-96 object-cover rounded-md mb-6"
        />

        {/* course name & instructor */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h1>
        <p className="text-lg text-gray-700 mb-4">
          Instructor: {course.instructor}
        </p>

        {/* course details */}
        <p className="text-gray-600 mb-4">{course.description}</p>
        <p className="text-sm text-gray-500">
          Enrollment Status: {course.enrollmentStatus}
        </p>
        <p className="text-sm text-gray-500">Duration: {course.duration}</p>
        <p className="text-sm text-gray-500">Schedule: {course.schedule}</p>
        <p className="text-sm text-gray-500">Location: {course.location}</p>

        {/* prerequisites Section */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          Prerequisites
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {course.prerequisites.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* syllabus accordion */}
        <div className="mt-6">
          <button
            className="w-full text-left flex justify-between items-center bg-gray-200 p-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-300 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Syllabus</span>
            <span>{isOpen ? "▲" : "▼"}</span>
          </button>

          {isOpen && (
            <div className="bg-gray-100 p-4 rounded-lg mt-2">
              {course.syllabus.map((week, index) => (
                <div key={index} className="mb-2">
                  <p className="font-semibold">
                    Week {week.week}: {week.topic}
                  </p>
                  <p className="text-gray-600">{week.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* enroll button */}
        <button className="mt-6 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
