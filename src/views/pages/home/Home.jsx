import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../common/nav/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
