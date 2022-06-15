import React from "react";
import { Routes, Route } from "react-router";
import { Homepage } from "../Components/Homepage";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
