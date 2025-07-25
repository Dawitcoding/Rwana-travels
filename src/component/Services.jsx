import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Services = () => {
  return (
    <div className="mx-4 sm:mx-[10%] mb-8 scroll-mt-25" id="services">
      <Title
        subTitle="Our Travel Services"
        title="Tailored Experiences for You"
      />
      <div className="w-full grid grid-cols-auto gap-8 gap-y-14 -z-10 ">
        <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img
            className="bg-blue-50 w-full h-[250px]"
            src={assets.destination_one}
            alt=""
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold">Yihha Monment</h5>
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center gap-2 text-sm justify-between text-gray-500 pb-5">
              <p className="text-md  ">3 Days</p>
              <p className="text-md ">Full Package</p>
              <p className="text-md  ">$27</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img
            className="bg-blue-50 w-full h-[250px]"
            src={assets.destination_two}
            alt=""
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold">Axum City</h5>
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center gap-2 text-sm justify-between text-gray-500 pb-5">
              <p className="text-md  ">3 Days</p>
              <p className="text-md ">Full Package</p>
              <p className="text-md  ">$30</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img
            className="bg-blue-50 w-full h-[250px]"
            src={assets.destination_three}
            alt=""
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold">Amentilla Afar</h5>
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center gap-2 text-sm justify-between text-gray-500 pb-5">
              <p className="text-md  ">2 Days</p>
              <p className="text-md ">Full Package</p>
              <p className="text-md  ">$20</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img
            className="bg-blue-50 w-full h-[250px]"
            src={assets.destination_four}
            alt=""
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold">Mekelle Bubbu</h5>
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center gap-2 text-sm justify-between text-gray-500 pb-5">
              <p className="text-md  ">1 Days</p>
              <p className="text-md ">Launch</p>
              <p className="text-md  ">$13</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img
            className="bg-blue-50 w-full h-[250px]"
            src={assets.destination_five}
            alt=""
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold">Gobetat Gerealta </h5>
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center gap-2 text-sm justify-between text-gray-500 pb-5">
              <p className="text-md  ">2 Days</p>
              <p className="text-md ">Full Package</p>
              <p className="text-md  ">$19</p>
            </div>
          </div>
        </div>
        <div className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
          <img
            className="bg-blue-50 w-full h-[250px]"
            src={assets.destination_six}
            alt=""
          />
          <div className="p-4">
            <h5 className="text-2xl font-bold">Korem Amusment</h5>
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center gap-2 text-sm justify-between text-gray-500 pb-5">
              <p className="text-md  ">3 Days</p>
              <p className="text-md ">Full Package</p>
              <p className="text-md  ">$25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
