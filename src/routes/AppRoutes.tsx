import Login from "@/components/forms/Login";
import Registration from "@/components/forms/Registration";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Registration/>}/>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
