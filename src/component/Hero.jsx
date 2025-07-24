import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6), rgba(29,28,28,0.6)),url('/images/hero.png')",
      }}
      className="mx-0 bg-hero bg-no-repeat bg-center bg-cover h-screen w-full"
    >
      <div className="flex flex-col items-center justify-center h-full ">
        <div className="text-center w-full max-w-[800px]">
          <h1 className="text-3xl md:text-[60px] font-bold text-white">
            Let the World Be Your Playground
          </h1>
          <p className="max-w-[700px] mt-5 text-gray-50 mx-auto leading-1.4 ">
            Let us turn your travel dreams into reality. Explore new cultures,
            meet new people, and create memories that last a lifetime.
          </p>
          <button className="flex items-center gap-4 px-8 py-3 rounded-full bg-primary text-white cursor-pointer mt-5 hover:text-black mx-auto transition duration-500">
            Explore more <img src={assets.dark_arrow} alt="" className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
