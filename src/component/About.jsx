import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-4 sm:mx-[10%] scroll-mt-30" id="about">
      <Title subTitle="About Us" title="Discover Our Story & Mission" />
      <div className="mt-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[360px] rounded-lg my-5"
          src={assets.about}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <h3 className="text-xl font-semibold">Rwana Travels</h3>
          <p>
            Rwana Travel is a Mekelle-based tour company dedicated to showcasing
            the beauty of Tigray through weekly trips to new and breathtaking
            destinations. From hidden rock-hewn churches to stunning mountain
            landscapes.we create unforgettable journeys that connect you deeply
            with the culture, history, and natural wonders of the region.
          </p>
          <p>
            Our all-inclusive packages cover everything you need—traditional
            meals, comfortable transportation, and unlimited professional photos
            and videos—so you can fully enjoy the experience while we handle the
            rest
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision in Rwana Travels is becoming a leading travel partner by
            delivering exceptional, personalized experiences that connect
            people, cultures, and destinations through innovation, integrity,
            and a deep passion for exploration!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
