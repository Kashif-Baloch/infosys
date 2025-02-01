import React from "react";

const Hero = ({ bred }) => {
  return (
    <div>
      <div className="loto file:relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/assets/pngs/Rectangle 2 (1).png"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>

        <div className="relative z-10 gap-6 flex flex-col justify-center items-center h-full text-center">
          <h4 className="text-3xl font-bold">{bred}</h4>
          <ul className="flex -mt-4 items-center gap-2">
            <li>Home</li>
            <span className="border-2 rounded-full bg-transparent h-3 w-3"></span>
            <li className="flex text-[#00A3F7] items-center justify-center gap-1">
              {bred}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
