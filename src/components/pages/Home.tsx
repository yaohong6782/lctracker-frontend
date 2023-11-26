import React, { useEffect } from "react";
import cardboard1 from "@/assets/cardboard-box1.png";
const Home = () => {
  console.log("access token ", localStorage.getItem("accessToken"));
  return (
    <>
      <div className="flex justify-center items-center pt-6 pb-6">
        <h1 className="text-3xl font-bold ">{"Track My Stuffs"} </h1>
      </div>
      <div className="flex justify-center pt-2 pb-2">
        <text className="text-2xl text-slate-500">My Sandbox.</text>
      </div>

      <div className="flex flex-col lg:flex-row justify-center pl-8">
        {/* <div className="flex md:flex-col"> */}
        <div className="py-4 px-4 flex flex-col mt-4 md:mt-0">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-1 w-full">
              <div className="font-bold my-1">Title Here</div>
            </div>
          </div>
          <div className="text-black text-base my-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
            accusantium!
          </div>
          <div>
            <img src={cardboard1} className="h-24 md:h-32 lg:h-40 xl:h-48" />
          </div>
        </div>
        {/* </div> */}
        {/* Second component should be below if the width is smaller */}
        <div className="py-4 px-4 flex flex-col mt-4 md:mt-0">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-1 w-full">
              <div className="font-bold my-1">Title Here</div>
            </div>
          </div>
          <div className="text-black text-base my-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
            accusantium!
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
