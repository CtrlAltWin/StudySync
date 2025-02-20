import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  courses: [],
  loading: false,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, setCourses, setLoading } = studentSlice.actions;
export default studentSlice.reducer;
