import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Slices/coursesSlice";
import studentReducer from "./Slices/studentSlice";
import courseDetailsReducer from "./Slices/courseDetailsSlice"

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    student: studentReducer,
    courseDetails: courseDetailsReducer,
  },
});

export default store;
