import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Hero = ({ bred }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        className="[&_.swiper-button-next]:text-[#fff] h-[80vh] transition-all [&_.swiper-button-prev]:text-[#fff] hover:[&_.swiper-button-prev]:text-[#00a3f7] hover:[&_.swiper-button-next]:text-[#00a3f7]"
      >
        <div className="loto file:relative h-[80vh] text-white overflow-hidden">
          <SwiperSlide className="absolute inset-0 -z-10">
            <img
              src="/assets/pngs/Rectangle 2 (1).png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 text-white secong z-10 gap-6 flex flex-col justify-center items-center h-full text-center">
              <h4 className="text-3xl font-bold">{bred}</h4>
              <ul className="flex -mt-4 items-center gap-2">
                <li>Home</li>
                <span className="border-2 rounded-full bg-transparent h-3 w-3"></span>
                <li className="flex text-[#00A3F7] items-center justify-center gap-1">
                  {bred}
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="absolute inset-0 -z-10">
            <img
              src="/assets/pngs/Rectangle 2.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 text-white secong z-10 gap-6 flex flex-col justify-center items-center h-full text-center">
              <h4 className="text-3xl font-bold">{bred}</h4>
              <ul className="flex -mt-4 items-center gap-2">
                <li>Home</li>
                <span className="border-2 rounded-full bg-transparent h-3 w-3"></span>
                <li className="flex text-[#00A3F7] items-center justify-center gap-1">
                  {bred}
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
