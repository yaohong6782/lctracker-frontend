import React from "react";

import { Route, Routes } from "react-router-dom";

import Login from "@/components/forms/Login";
import Registration from "@/components/forms/Registration";
import UploadQuestions from "@/components/pages/UploadQuestions";
import TitleOverlay from "@/components/navbar/TitleOverlay";
import Home from "@/components/pages/Home";
import Dashboard from "@/components/pages/Dashboard";
import AuthWrapper from "./AuthWrapper";

const AppRoutes = () => {
  console.log("hahaha ", localStorage.getItem("accessToken"));
  console.log('username' , localStorage.getItem("userLoginName"));
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route
        path="/"
        element={
          <AuthWrapper>
            <TitleOverlay />
          </AuthWrapper>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<UploadQuestions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/logout"/> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
