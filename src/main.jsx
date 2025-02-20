import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CourseDetails from "./components/CourseDetails";
import Dashboard from "./components/Dashboard";
import CourseList from "./components/CourseList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CourseList /> },
      { path: "/courseDetails/:id", element: <CourseDetails /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/error", element: <ErrorPage /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
