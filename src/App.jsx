import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./component/About";
import Services from "./component/Services";
import Destination from "./component/Destination";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Title from "./component/Title";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
