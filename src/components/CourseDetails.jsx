import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseById } from "../utils/api";
import ShimmerCourseDetails from "./ShimmerCourseDetails";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getCourse = async () => {
      const data = await fetchCourseById(Number(id));
      setCourse(data);
      setLoading(false);
    };
    getCourse();
  }, [id]);

  if (loading) {
    return <ShimmerCourseDetails />;
  }

  if (!course) {
    return (
      <div className="text-center py-10 text-lg text-red-500">
        Course not found.
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-2 shadow-lg hover:bg-gray-50 rounded-lg scale-95">
      <img
        src={course.thumbnail}
        alt={course.name}
        className="w-full h-96 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h1>
      <p className="text-lg text-gray-700 mb-4">
        Instructor: {course.instructor}
      </p>

      <button
        className="mt-4 text-blue-600 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Details" : "View Details"}
      </button>

      {isOpen && (
        <div className="mt-2 text-gray-700 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-600 mb-4">{course.description}</p>
          <p className="text-sm text-gray-500">
            Enrollment Status: {course.enrollmentStatus}
          </p>
          <p className="text-sm text-gray-500">Duration: {course.duration}</p>
          <p className="text-sm text-gray-500">Schedule: {course.schedule}</p>
          <p className="text-sm text-gray-500">Location: {course.location}</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            Prerequisites
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {course.prerequisites.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            Syllabus
          </h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            {course.syllabus.map((week, index) => (
              <div key={index} className="mb-2">
                <p className="font-semibold">
                  Week {week.week}: {week.topic}
                </p>
                <p className="text-gray-600">{week.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="mt-6 w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
