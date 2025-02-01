import Link from "next/link";
import React from "react";
import Sample from "../components/Sample";

const HeroSection = () => {
  return (
    <div>
      <div className="loto file:relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/assets/pngs/Rectangle 2.png"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>

        <div className="relative z-10 gap-6 flex flex-col justify-center items-center h-full text-center">
          <h4 className="">CREATIVE & INNOVATIVE</h4>
          <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Creative & Innovative
            <br />
            Digital Solution
          </h4>
          <div className="flex gap-4">
            <Link
              href="/"
              className="px-11 py-2 md:px-[52px] text-sm md:text-lg md:py-[16px] bg-[#00A3F7]"
            >
              Free Quote
            </Link>
            <Link
              href="/"
              className="px-11 py-2 md:px-[52px] text-sm md:text-lg md:py-[16px] border bg-transparent"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </div>
      <Sample />
    </div>
  );
};

export default HeroSection;
