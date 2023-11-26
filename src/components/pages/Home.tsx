import React, { useEffect } from "react";
import cardboard1 from "@/assets/cardboard-box1.png";
import patchingCardBoard from "@/assets/cardboard-maintenance.png";

const Home = () => {
  console.log("access token ", localStorage.getItem("accessToken"));
  return (
    <>
      <div className="flex justify-center items-center pt-6 pb-6">
        <h1 className="text-3xl font-bold ">{"Log Tracker"} </h1>
      </div>
      <div className="flex justify-center pt-2 pb-2">
        {/* <text className="text-2xl text-slate-500">My Sandbox</text> */}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="max-w-md flex flex-col p-6">
            <h2 className="font-bold text-xl p-2">Simple Yet Powerful</h2>
            <p className="p-2 text-slate-500">
              Capture your questions, ponder on them, and uncover hidden
              insights.
              <br />
              No frills, just focus.
            </p>
            <img
              src={cardboard1}
              className="rounded-2xl w-full shadow-lg"
              alt="Cardboard 1"
            />
          </div>
          <div className="max-w-md flex flex-col p-6">
            <h2 className="font-bold text-xl p-2">What&lsquo;s Coming Next</h2>
            <p className="p-2 text-slate-500">
              Stay tuned for exciting additions and features to enhance your
              experience. <br />
              Constantly evolving and improving.
            </p>
            <img
              src={patchingCardBoard}
              className="rounded-2xl w-full shadow-lg "
              alt="Cardboard Patching"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// .ds-grid {
//     display: flex;
//     flex-flow: wrap;
//     margin-left: -24px;
//     margin-right: -24px;

//   <div className="flex flex-col lg:flex-row justify-center pl-8">
//     <div className="py-4 px-4 flex flex-col mt-4 max-w-sm md:mt-0">
//       <div className="flex items-center w-full justify-between">
//         <div className="flex items-center space-x-1 w-full">
//           <div className="font-bold my-1 ">Title Here</div>
//         </div>
//       </div>
//       <div className="text-black text-base my-1 text-start">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
//         accusantium!
//       </div>
//       <div className="flex justify- mt-4">
//         {/* <img src={cardboard1} className="rounded-xl h-24 md:h-32 lg:h-40 xl:h-48" /> */}
//         <img src={cardboard1} className="rounded-xl h-68 w-64 " />
//       </div>
//     </div>
//     <div className="py-4 px-4 flex flex-col mt-4 max-w-sm md:mt-0">
//       <div className="flex items-center w-full justify-between">
//         <div className="flex items-center space-x-1 w-full">
//           <div className="font-bold my-1 ">Title Here</div>
//         </div>
//       </div>
//       <div className="text-black text-base my-1 text-start">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
//         accusantium!
//       </div>
//       <div className="flex justify- mt-4">
//         {/* <img src={cardboard1} className="rounded-xl h-24 md:h-32 lg:h-40 xl:h-48" /> */}
//         <img src={cardboard1} className="rounded-xl h-68 w-64 " />
//       </div>
//     </div>
//   </div>
