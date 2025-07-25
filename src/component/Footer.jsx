import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mx-4 sm:mx-[10%] border-t border-t-gray-700 mb-5">
      <p className="pt-4">@ 2025 Rwana Events. All rights reserved.</p>
      <ul className="flex items-start gap-4 pt-4">
        <li>Term of services</li>
        <li>privacy policy</li>
      </ul>
    </div>
  );
};

export default Footer;
