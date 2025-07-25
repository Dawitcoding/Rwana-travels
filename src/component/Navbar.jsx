import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex items-center justify-between px-4 sm:px-[10%] text-sm text-primary py-2 fixed top-0 left-0 right-0 bg-white shadow-sm ">
      <div className="flex items-center">
        <img
          src={assets.logo}
          alt=""
          className=" w-24 md:w-32 cursor-pointer"
        />
        <h2 className="text-xl  md:text-2xl font-bold -mx-4 md:-mx-8">
          Rwana Travel
        </h2>
      </div>
      <ul className="hidden lg:flex items-start gap-5 font-medium">
        <li className="py-1">
          <a href="#top">Home</a>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li className="py-1">
          <a href="#about">About</a>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li className="py-1">
          <a href="#services">Services</a>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li className="py-1">
          <a href="#gallery">Gallery</a>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li className="py-1">
          <a href="#testimonial">Testimonial</a>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="bg-primary px-8 py-3 rounded-full cursor-pointer text-white hidden lg:block"
        >
          Contact Us
        </a>
      </div>

      {/* menu button for mobile size */}
      <img
        onClick={() => setShowMenu(true)}
        className="w-6  lg:hidden ml-3"
        src={assets.menu_icon}
        alt=""
      />

      {/* mobile menu */}
      <div
        className={`${
          showMenu ? "fixed w-64" : "hidden"
        } lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden h-screen bg-gray-100 transition duration-500`}
      >
        <div className=" px-5 py-6 relative">
          <img
            className="w-7 absolute top-5 right-5"
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink to="#top" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-gray-400">HOME</p>
          </NavLink>
          <NavLink to="#about" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2  hover:text-gray-400">About</p>
          </NavLink>
          <NavLink to="#services" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-gray-400">Services</p>
          </NavLink>
          <NavLink to="#gallery" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-gray-400">Gallery</p>
          </NavLink>
          <NavLink to="#testimonial" onClick={() => setShowMenu(false)}>
            <p className="px-4 py-2 hover:text-gray-400">Testimonial</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
