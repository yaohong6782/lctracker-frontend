import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      navigate("/login");
    } else {
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp !== undefined && decodedToken.exp < currentTime) {
        navigate("/login");
      }
    }
  }, []);

  console.log("access token ", localStorage.getItem("accessToken"));
  return (
    <>
      <div className="flex justify-center items-center pt-6">
        <h1 className="text-3xl font-bold ">{"Track My Stuffs"} </h1>
      </div>
      <h1>Hello world</h1>
    </>
  );
};

export default Home;
