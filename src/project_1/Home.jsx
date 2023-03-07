import React from "react";
import { NavLink } from "react-router-dom";
import Web from "../images/img2.svg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={Web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
