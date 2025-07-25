import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div id="contact" className="mx-4 sm:mx-[10%] mb-30 scroll-mt-25">
      {" "}
      <Title subTitle="Get in Touch" title="We Love to Hear from You" />
      <div className="flex flex-col md:flex-row gap-4">
        {/* left */}
        <div className="flex flex-col flex-1 mt-10">
          <div className="flex items-center gap-4 p-4">
            <div className="bg-white shadow-soft rounded-[50%] px-4 py-4 items-center">
              <img src={assets.location} alt="" className="w-12 h-12" />
            </div>
            <div>
              <h5 className="text-primary font-semibold text-xl">Address</h5>
              <p className="text-[#64686c] -pt-4">
                Romanat, Addebabay-hawsen, <br /> Mekelle, Tigray .
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="bg-white shadow-soft rounded-[50%] px-4 py-4 items-center">
              <img src={assets.phone} alt="" className="w-12 h-12" />
            </div>
            <div>
              <h5 className="text-primary font-semibold text-xl">Phone</h5>
              <p className="text-[#64686c] -pt-4">+251-999-87-90-20</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="bg-white shadow-soft rounded-[50%] px-4 py-4 items-center">
              <img src={assets.mail} alt="" className="w-12 h-12" />
            </div>
            <div>
              <h5 className="text-primary font-semibold text-xl">Email</h5>
              <p className="text-[#64686c] -pt-4">rwana.events@gmail.com</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 p-4 bg-white shadow-soft">
          <form className="flex flex-col items-start gap-4">
            <input
              className="pt-5 w-full border-b mx-auto text-gray-400 border-gray-400 "
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <input
              className="pt-5 w-full border-b mx-auto text-gray-400 border-gray-400  "
              type="tel"
              name="phone"
              placeholder="Enter Yuor Phone Number"
              required
            />
            <textarea
              className="pt-5 w-full border-b mx-auto text-gray-400 border-gray-400 "
              name="message"
              rows="3"
              placeholder="Write your message"
              required
            ></textarea>
            <button
              className="px-8 py-3 bg-primary cursor-pointer rounded-full"
              type="submit"
            >
              Submit now{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
