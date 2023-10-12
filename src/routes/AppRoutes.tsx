import Login from "@/components/forms/Login";
import Registration from "@/components/forms/Registration";
import HomePage from "@/components/pages/HomePage";
import Title from "@/components/pages/Title";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/home" element={<Title />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
