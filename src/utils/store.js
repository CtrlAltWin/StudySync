// store.js
import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Slices/courcesSlice";
import studentReducer from "./Slices/studentSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    student: studentReducer,
  },
});

export default store;
