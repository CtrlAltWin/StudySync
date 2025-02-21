import { createSlice } from "@reduxjs/toolkit";

const courseDetailsSlice = createSlice({
  name: "courseDetails",
  initialState: {
    course: null,
    loading: false,
  },
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCourse, setLoading } = courseDetailsSlice.actions;
export default courseDetailsSlice.reducer;
