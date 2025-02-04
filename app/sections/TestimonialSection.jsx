"use client";

import React, { useState } from "react";
import Heading from "../components/Heading";
import TestimonialCarousel from "../components/TestimonialsComponent";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Michael Anderson",
      role: "PROFESSION",
      img: "/assets/pngs/Rectangle 24.png", // Replace with actual image path
      text: `The Information Technology (IT) field encompasses a wide range of
            professions and career opportunities. IT professionals work with
            technology systems and software to design, develop, manage, and
            maintain various aspects of computing and information systems.`,
    },
    {
      name: "Emily Davis",
      role: "BUSINESS WOMAN",
      img: "/assets/pngs/Rectangle 25.png",
      text: `"Business women" refers to women who are actively. engaged in various
            aspects of the business world. This can include women who are
            entrepreneurs, business owners, corporate executives, managers,
            professionals, or employees in various industries.`,
    },
    {
      name: "James Wilson",
      role: "APPLICATION DEVELOPMENT",
      img: "/assets/pngs/Rectangle 26.png",
      text: `Application development refers to the process of creating software
            applications for various platforms and devices, such as mobile phones,
            desktop computers, web browsers, and more.`,
    },
    {
      name: "James Wilson",
      role: "APPLICATION DEVELOPMENT",
      img: "/assets/pngs/Rectangle 26.png",
      text: `Application development refers to the process of creating software
            applications for various platforms and devices, such as mobile phones,
            desktop computers, web browsers, and more.`,
    },
  ];
  const [activePoint, setActivePoint] = useState(0);
  return (
    <div className="w-[90%] mt-14 mx-auto">
      <div className="container mx-auto">
        {/* <img className=" w-[9%]" src="/assets/newsvgs/Group 20.svg" alt="" /> */}
        <div className="flex items-center gap-2 justify-center my-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 transition-all ${
                index === activePoint ? "bg-[#00A3F7] w-7" : "bg-[#DDDDDB]"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <Heading
          ht={"TESTIMONIAL"}
          hft={"What Our Client Say About"}
          hfb={"Over Digital Services"}
        />
        <section className="leading-7 text-gray-900 bg-white">
          <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
            <TestimonialCarousel
              testimonials={testimonials}
              setActivePoint={setActivePoint}
            />
            {/* <div
              id="pricing"
              className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
            >
              <div className="relative w-full bg-[#EAF9FF] z-10 flex flex-col max-w-md p-4 mx-auto my-0 lg:-mr-3 sm:my-0 sm:p-6 md:my-2 md:p-8">
                <div className="flex items-center my-3">
                  <img
                    src="/assets/pngs/Rectangle 24.png"
                    alt="Avatar"
                    className="w-12 h-12 rounded-sm mr-4  border-purple-300"
                  />
                  <div>
                    <h4 className="font-semibold ml-2 text-[#00A1F4]">
                      Michael Anderson
                    </h4>
                    <p className="text-gray-600">PROFESSION</p>
                  </div>
                </div>
                <hr className="bg-gray-400 p-[.5px]" />
                <p className="text-sm font-medium my-4 text-gray-500">
                  The Information Technology (IT) field encompasses a wide range
                  of professions and career opportunities. IT professionals work
                  with technology systems and software to design, develop,
                  manage, and maintain various aspects of computing and
                  information systems.
                </p>
              </div>
              ;
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialSection;
