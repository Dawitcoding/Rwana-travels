import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Gallery = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Title subTitle="Our Travel Moments" title="See What You Miss" />
      <div className="grid grid-cols-auto gap-8 py-20">
        <div className="">
          <img
            className="w-full rounded-lg  "
            src={assets.gallery_one}
            alt=""
          />
        </div>
        <div className="">
          <img className="w-full rounded-lg " src={assets.gallery_two} alt="" />
        </div>
        <div className="">
          <img
            className="w-full rounded-lg "
            src={assets.gallery_three}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full rounded-lg  "
            src={assets.gallery_four}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full rounded-lg  "
            src={assets.gallery_five}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full rounded-lg  "
            src={assets.gallery_six}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full rounded-lg  "
            src={assets.gallery_seven}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full rounded-lg  "
            src={assets.gallery_eight}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
