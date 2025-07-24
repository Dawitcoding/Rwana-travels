import React from "react";
import Slider from "react-slick";
import Title from "./Title";
import { assets } from "../assets/assets";
const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000, // screens below 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-4 sm:mx-[10%] ">
      <Title subTitle="What Our Travelers Say" title="Genuine Experiences" />
      <div className="mt-20"></div>
      <Slider {...settings}>
        <div className="px-4">
          {" "}
          <div className="border border-white shadow-soft rounded-md p-4 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={assets.user_1}
                alt=""
                className="w-14 border-4 rounded-full border-primary "
              />
              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-primary">
                  Hermon Tesfay
                </h4>
                <p className="-pt-2 text-sm text-gray-500">Organizer</p>
              </div>
            </div>
            <p className="text-md text-gray-700 leading-1.4 pb-4">
              Every trip we organize at Rwana is about creating a deep
              connection between people and place. Seeing travelers leave with
              lasting memories is part of what we do.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="border border-white shadow-soft rounded-md p-4 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={assets.user_1}
                alt=""
                className="w-14 border-4 rounded-full border-primary "
              />
              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-primary">
                  Hermon Tesfay
                </h4>
                <p className="-pt-2 text-sm text-gray-500">Organizer</p>
              </div>
            </div>
            <p className="text-md text-gray-700 leading-1.4 pb-4">
              Every trip we organize at Rwana is about creating a deep
              connection between people and place. Seeing travelers leave with
              lasting memories is part of what we do.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="border border-white shadow-soft rounded-md p-4 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={assets.user_1}
                alt=""
                className="w-14 border-4 rounded-full border-primary "
              />
              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-primary">
                  Hermon Tesfay
                </h4>
                <p className="-pt-2 text-sm text-gray-500">Organizer</p>
              </div>
            </div>
            <p className="text-md text-gray-700 leading-1.4 pb-4">
              Every trip we organize at Rwana is about creating a deep
              connection between people and place. Seeing travelers leave with
              lasting memories is part of what we do.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="border border-white shadow-soft rounded-md p-4 mb-4">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={assets.user_1}
                alt=""
                className="w-14 border-4 rounded-full border-primary "
              />
              <div className="flex flex-col items-start">
                <h4 className="text-xl font-semibold text-primary">
                  Hermon Tesfay
                </h4>
                <p className="-pt-2 text-sm text-gray-500">Organizer</p>
              </div>
            </div>
            <p className="text-md text-gray-700 leading-1.4 pb-4">
              Every trip we organize at Rwana is about creating a deep
              connection between people and place. Seeing travelers leave with
              lasting memories is part of what we do.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
