import React from "react";
import { Outlet } from "react-router-dom";

const Title = () => {
  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-3xl font-bold underline">Track My Stuffs</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Title;
