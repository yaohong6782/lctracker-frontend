import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import cardboard1 from "@/assets/cardboard-box1.png";

const TitleOverlay = () => {
  const [isActiveLink, setIsActiveLink] = useState("");

  const handleLinkClick = (linkName: string) => {
    setIsActiveLink(linkName);
  };
  return (
    <>
      <nav className="p-4 sticky top-0 z-50 justify-between text-xl font-acme border-b pb-3 bg-white dark:border-b-slate-800">
        {/* <div className="flex justify-between items-center m-auto max-w-7xl"> */}
        <div className="flex flex-nowrap gap-6 items-center">
          <NavLink
            to="/home"
            className={`flex items-center font-bold hover:underline underline-offset-8 cursor-pointer ${
              isActiveLink === "Home" ? "underline" : ""
            }`}
            onClick={() => handleLinkClick("Home")}
          >
            <img src={cardboard1} className="w-10 border-2 p-1 rounded-lg border-amber-300 mr-3 transform-gpu hover:scale-110" />
            Log Tracker
          </NavLink>{" "}
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
          <div className="ml-auto">
            <NavLink
              to={"/"}
              className={`hover:underline underline-offset-8 cursor-pointer ${
                isActiveLink === "Logout" ? "underline" : ""
              }`}
              onClick={() => handleLinkClick("Logout")}
            >
              Sign out
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default TitleOverlay;
