import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-[#212ea0] text-[15px] font-semibold uppercase my-[120px] mb-[30px]">
      <p className="text-gray-400 text-sm">{subTitle}</p>
      <h2 className="text-[32px] text-[#000f38] mt-[5px]">{title}</h2>
    </div>
  );
};

export default Title;
