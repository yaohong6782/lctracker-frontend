import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Title = () => {
  const [isActiveLink, setIsActiveLink] = useState("Home");

  const handleLinkClick = (linkName: string) => {
    setIsActiveLink(linkName);
  };
  return (
    <>
      <nav className="p-4 sticky top-0 z-50 justify-between text-xl font-acme border-b pb-3 bg-white dark:border-b-slate-800">
        <div className="flex justify-between items-center m-auto max-w-7xl">
          <div className="flex justify-start">
            <span
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Home" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </span>{" "}
          </div>
          <ul className="flex justify-center gap-6">
            <li
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Post" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Post")}
            >
              Post
            </li>
            <li
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "View Dashboard" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("View Dashboard")}
            >
              View Dashboard
            </li>
          </ul>
          <div className="flex justify-end">
            <span
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Profile" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Profile")}
            >
              Profile
            </span>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-3xl font-bold ">Track My Stuffs</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Title;
