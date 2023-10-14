import React from "react";
import { Outlet } from "react-router-dom";

const Title = () => {
  return (
    <>
      <nav className="p-4 sticky top-0 z-50 justify-between text-xl font-acme border-b pb-3 bg-white dark:border-b-slate-800">
        <div className="flex justify-between items-center m-auto max-w-7xl">
          <div className="flex justify-start"> Home </div>
          <ul className="flex justify-center gap-6">
            <li>Post</li>
            <li>View Dashboard</li>
            {/* <li>third</li> */}
          </ul>
          <div className="flex justify-end">Profile</div>
        </div>
      </nav>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold underline">Track My Stuffs</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Title;
{
  /* <ul className="">
            <li>Home</li>
          </ul>
          <ul className="flex items-center gap-2 md:gap-4">
            <li>asdf</li>
            <li>asdf</li>
            <li>sdskaj</li>
          </ul> */
}
