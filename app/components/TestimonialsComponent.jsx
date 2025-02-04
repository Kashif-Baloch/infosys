"use client";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const TestimonialCarousel = ({ setActivePoint, testimonials }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActivePoint(swiper.activeIndex);
    setActiveSlide(swiper.activeIndex); // Get the active slide index
  };

  return (
    <Swiper
      slidesPerView={3}
      onSlideChange={handleSlideChange}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: "0" }, // 1 slide on mobile
        820: { slidesPerView: 2, spaceBetween: "5px" }, // 2 slides on tablets
        1024: { slidesPerView: 3 }, // 3 slides on larger screens
      }}
      className="grid md:!pb-[4rem] grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
    >
      {testimonials.map((elem, index) => {
        return (
          <SwiperSlide
            key={index}
            className={`${
              index === (activeSlide + 1) % testimonials.length
                ? "lg:shadow-2xl bg-white relative w-full z-10 flex flex-col lg:max-w-md p-6 !aspect-[3/2] ratio m-0"
                : "bg-[#EAF9FF] relative w-full z-10 flex flex-col lg:max-w-md p-6 !aspect-[3/2] ratio m-0"
            }`}
          >
            <div className="flex items-center my-3">
              <img
                src={elem.img}
                alt="Avatar"
                className="w-12 h-12 rounded-sm mr-4  border-purple-300"
              />
              <div>
                <h4 className="font-semibold ml-2 text-[#00A1F4]">
                  {elem.name}
                </h4>
                <p className="text-gray-600">{elem.role}</p>
              </div>
            </div>
            <hr className="bg-gray-400 p-[.5px]" />
            <p className="text-sm font-medium my-4 text-gray-500">
              {elem.text}
            </p>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialCarousel;
