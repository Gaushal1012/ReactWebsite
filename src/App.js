import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./project_1/Home";
import Services from "./project_1/Services";
import About from "./project_1/About";
import Contact from "./project_1/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./project_1/Navbar";
import Footer from "./project_1/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
