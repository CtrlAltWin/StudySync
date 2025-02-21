import { useEffect, useState } from "react";
import { fetchCourses } from "../utils/api";
import { useNavigate } from "react-router-dom";
import ShimmerCourseList from "./ShimmerCourseList";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, setLoading } from "../utils/Slices/coursesSlice";

const CourseList = () => {
  const [search, setSearch] = useState("");
  const [showTopRated, setShowTopRated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // used IIFE for fetching courses
    (async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchCourses();
        dispatch(setCourses(data));
      } catch (err) {
        navigate("/error");
      } finally {
        dispatch(setLoading(false));
      }
    })();
  }, []);

  //subscribing the store
  const courses = useSelector((store) => store.courses.data);
  const loading = useSelector((store) => store.courses.loading);

  //filters course based on sesarch or ratings
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());
    const matchesRating = showTopRated ? course.rating >= 4 : true;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="w-full p-4 bg-gray-50 pt-5 h-[calc(100vh-5rem)] overflow-y-scroll overflow-x-hidden">
      {/*Search bar and filter button container->gray colored box*/}
      <div className="flex flex-col sm:flex-row justify-between bg-gradient-to-b from-gray-500 to-gray-600 opacity-90 rounded-xl p-6 items-center mb-6 gap-4">
        {/*Filter Button*/}
        <button
          onClick={() => setShowTopRated(!showTopRated)}
          className="min-w-24 w-[30vw] sm:w-[20vw] p-3 rounded-full text-white font-medium transition-all 
             shadow-md active:scale-95 active:opacity-80 bg-gray-500"
        >
          {showTopRated ? "Show All" : "Rated 4⭐+"}
        </button>

        {/*Search bar*/}
        <div className="relative w-full sm:w-[55vw] max-w-xl">
          <input
            type="text"
            placeholder="search course, e.g. web dev..."
            className="w-full py-3 px-6 bg-gray-500 shadow-md rounded-full outline-none transition placeholder-gray-100 backdrop-blur-lg bg-opacity-80 text-gray-100 active:scale-101"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/*Lens Icon in search bar*/}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            🔍
          </div>
        </div>
      </div>

      {/*Course List*/}
      <div className="flex flex-col gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col sm:flex-row items-start p-6 bg-white shadow-md rounded-xl transition-transform transform hover:shadow-lg"
            >
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-full sm:w-48 h-48 object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Instructor: {course.instructor}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-lg">
                    {course.rating}⭐
                  </span>
                </p>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {course.description}
                </p>

                {/*Button to view course details*/}
                <button
                  onClick={() => {
                    navigate("courseDetails/" + course.id);
                  }}
                  className="mt-4 py-2 px-5 bg-blue-500 text-white rounded-lg transition transform hover:scale-105 active:scale-95 shadow-md"
                >
                  View Course
                </button>
              </div>
            </div>
          ))
        ) : loading ? (
          <ShimmerCourseList />
        ) : (
          <div className="p-4 text-center text-xl font-extralight">
            Oh! we are not able to find courses right now.
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
