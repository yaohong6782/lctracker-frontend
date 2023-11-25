import React, { useEffect } from "react";

const Home = () => {
  console.log("access token ", localStorage.getItem("accessToken"));
  return (
    <>
      <div className="flex justify-center items-center pt-6 pb-6">
        <h1 className="text-3xl font-bold ">{"Track My Stuffs"} </h1>
      </div>
      <div className="flex justify-center pt-2 pb-2">
        <text className="text-2xl text-slate-500">
          Jot and Keep track of your stuffs. Its your Sandbox.
        </text>
      </div>

      {/* <div className="flex items-center p-4 gap-36 justify-center">
        <div className="flex flex-col">
            <div>Hello World1</div>
            <div>Hello World2</div>
        </div>
        <div className="flex flex-col justify-center">
            <div>Hello World3</div>
            <div>Hello World4</div>
        </div>
      </div> */}
      {/* <div className="grid grid-col-6 grid-flow-col">
        <div className="flex justify-center">
          <text className="text-center"> Upload Questions </text>

          <div>
            this should be below upload question 
          </div>
        </div>
        <div className="flex justify-center">
          <text className="text-center">View Uploaded Stuffs Posts</text>
          <div>
            this should be below view uploaded posts
          </div>
        </div>
      </div> */}
      <div className="flex flex-row justify-center">
        <div className="py-4 px-4 flex space-x-4">
          {/* <div>
            <div className="w-10 h-10 bg-slate-200 rounded-full" />
          </div> */}

          <div className="flex flex-col ">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center space-x-1 w-full">
                <div className="font-bold my-1">Title Here</div>
              </div>
              <div>asdf</div>
            </div>
            <div className="text-black text-base my-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
              accusantium!
            </div>
            {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div> */}
          </div>
        </div>

        <div className="py-4 px-4 flex space-x-4">
          {/* <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
            </div> */}

          <div className="flex flex-col ">
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center space-x-1 w-full">
                <div className="font-bold my-1">Title Here</div>
              </div>
              <div>asdf</div>
            </div>
            <div className="text-black text-base my-1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
              accusantium!
            </div>
            {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
