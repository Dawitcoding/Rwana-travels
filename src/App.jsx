import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./component/About";
import Services from "./component/Services";
import Destination from "./component/Destination";
import Gallery from "./component/Gallery";
import Testimonial from "./component/Testimonial";
import Contact from "./component/Contact";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
