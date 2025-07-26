import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mx-4 sm:mx-[10%] border-t border-t-gray-700 mb-5">
      <p className="pt-4 text-sm sm:text-md">
        @ 2025 Rwana Events. All rights reserved.
      </p>
      <ul className="flex flex-col sm:flex-row items-start gap-1 sm:gap-4 pt-4">
        <li className="cursor-pointer text-sm sm:text-md">Term of services</li>
        <li className="cursor-pointer text-sm sm:text-md">privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
