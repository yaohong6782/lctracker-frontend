import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      setIsLoading(false);
      navigate("/login");
    } else {
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp !== undefined && decodedToken.exp < currentTime) {
        setIsLoading(false);
        navigate("/login");
      }
      setIsLoading(false);
    }
  }, []);

  return <>{isLoading ? <div>Loading...</div> : children}</>
};

export default AuthWrapper;
