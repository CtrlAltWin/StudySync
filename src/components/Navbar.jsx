//fully completed

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center px-8 shadow-lg bg-gray-100 rounded-sm">
      <div className="font-light text-2xl sm:text-[3vmin]">StudySync</div>
      <div className="flex gap-8 text-lg sm:text-[2.4vmin] items-center font-light text-gray-700">
        <Link to="/" className="hidden sm:block hover:text-blue-500 transition">
          Courses
        </Link>
        <Link
          to="/Dashboard"
          className="hidden sm:block hover:text-blue-500 transition"
        >
          Dashboard
        </Link>

        {/* Mobile Menu */}
        <details className="sm:hidden relative cursor-pointer z-10">
          <summary className="list-none flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 bg-white w-44 shadow-md rounded-lg py-2 opacity-95">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
