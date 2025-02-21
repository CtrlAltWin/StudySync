import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    setCourses: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCourses, setLoading} = coursesSlice.actions;
export default coursesSlice.reducer;
