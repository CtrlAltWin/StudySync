import React from "react";
import Navbar from "./components/Navbar";
import CourseDetails from "./components/CourseDetails";
import Dashboard from "./components/Dashboard";
import CourseList from "./components/CourseList";
import {Outlet} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  );
};

export default App;
