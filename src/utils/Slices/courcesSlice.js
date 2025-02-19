import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../utils/api";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCourses, setLoading, setError } = coursesSlice.actions;

export const loadCourses = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const data = await fetchCourses();
    dispatch(setCourses(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};

export default coursesSlice.reducer;
