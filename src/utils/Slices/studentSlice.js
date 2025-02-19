import { createSlice } from "@reduxjs/toolkit";
import { fetchEnrolledCourses, markCourseAsCompleted } from "../utils/api";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    enrolledCourses: [],
    loading: false,
    error: null,
  },
  reducers: {
    setEnrolledCourses: (state, action) => {
      state.enrolledCourses = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    completeCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { setEnrolledCourses, setLoading, setError, completeCourse } =
  studentSlice.actions;

export const loadEnrolledCourses = (studentId) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchEnrolledCourses(studentId);
    dispatch(setEnrolledCourses(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export const markCourseComplete = (studentId, courseId) => async (dispatch) => {
  const response = await markCourseAsCompleted(studentId, courseId);
  if (response.success) {
    dispatch(completeCourse(courseId));
  }
};

export default studentSlice.reducer;
