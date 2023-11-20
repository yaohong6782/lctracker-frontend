import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const TitleOverlay = () => {
  const [isActiveLink, setIsActiveLink] = useState("")

  const handleLinkClick = (linkName: string) => {
    setIsActiveLink(linkName);
  };
  return (
    <>
      <nav className="p-4 sticky top-0 z-50 justify-between text-xl font-acme border-b pb-3 bg-white dark:border-b-slate-800">
        <div className="flex justify-between items-center m-auto max-w-7xl">
          <div className="flex justify-start">
            <NavLink
              to="/home"
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Home" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </NavLink>{" "}
          </div>
          <ul className="flex justify-center gap-6">
            <NavLink to="/post">
              <li
                className={`hover:underline underline-offset-8 cursor-pointer ${
                  isActiveLink === "Post" ? "underline" : ""
                }`}
                onClick={() => handleLinkClick("Post")}
              >
                Post
              </li>
            </NavLink>
            <NavLink
                to="/dashboard"
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Dashboard" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Dashboard")}
            >
             Dashboard
            </NavLink>
          </ul>
          <div className="flex justify-center gap-6">
            <span
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Profile" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Profile")}
            >
              Profile
            </span>
            <NavLink
                to={"/"}
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Logout" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Logout")}
            >
              Logout
            </NavLink>
          </div>
          {/* <div className="flex justify-end">
            <NavLink
                to={"/"}
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Logout" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Logout")}
            >
              Logout
            </NavLink>
          </div> */}
        </div>
      </nav>
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-3xl font-bold ">{isActiveLink == "Post" ? "Post Question" : isActiveLink}</h1>
      </div>
      <Outlet />
    </>
  );
};

export default TitleOverlay;