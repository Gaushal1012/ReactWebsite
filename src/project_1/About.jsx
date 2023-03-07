import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../images/img9.png";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page "
        imgsrc={Img}
        visit="/contact"
        btnname="Contact now"
      />
    </>
  );
};

export default About;
