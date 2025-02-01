import React from "react";

const Heading = ({ ht, hft, hfb }) => {
  return (
    <div>
      <div className="flex items-center flex-col justify-center text-center">
        <h3 className="text-[#00A3F7] text-lg mb-4">{ht}</h3>
        <h1 className="title-font sm:text-[34px] text-2xl font-bold mb-4 text-gray-900">
          {hft}
          <br />
          {hfb}
        </h1>
        <img className="w-[10%]" src="/assets/svgs/Group 11.svg" alt="" />
      </div>
      ;
    </div>
  );
};

export default Heading;
