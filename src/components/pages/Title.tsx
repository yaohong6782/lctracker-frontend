import React from "react";
import { Outlet } from "react-router-dom";

const Title = () => {
  return (
    <>
      <nav className="p-4 sticky top-0 z-50 justify-between text-xl font-acme border-b pb-3 bg-white dark:border-b-slate-800">
        <div className="flex justify-between items-center m-auto max-w-7xl">
          <div className="flex justify-start">
            <span className="hover:underline underline-offset-8">Home</span>{" "}
          </div>
          <ul className="flex justify-center gap-6">
            <li className="hover:underline underline-offset-8">Post</li>
            <li className="hover:underline underline-offset-8">
              View Dashboard
            </li>
          </ul>
          <div className="flex justify-end">
            <span className="hover:underline underline-offset-8">Profile</span>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-3xl font-bold underline">Track My Stuffs</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Title;
