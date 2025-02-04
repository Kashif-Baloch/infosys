"use client";
import Link from "next/link";
import React from "react";
import Sample from "../components/Sample";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        modules={[Navigation]}
        navigation={true}
        loop={true}
        className="[&_.swiper-button-next]:hidden md:[&_.swiper-button-next]:block md:[&_.swiper-button-prev]:block [&_.swiper-button-prev]:hidden md:[&_.swiper-button-next]:text-[#fff] h-screen transition-all md:[&_.swiper-button-prev]:text-[#fff] md:hover:[&_.swiper-button-prev]:text-[#00a3f7] md:hover:[&_.swiper-button-next]:text-[#00a3f7]"
      >
        <div className="loto file:relative h-screen text-white overflow-hidden">
          <SwiperSlide className="absolute inset-0 -z-10">
            <img
              src="/assets/pngs/Rectangle 2.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 text-white secong z-10 gap-6 flex flex-col justify-center items-center h-full text-center">
              <h4 className="">CREATIVE & INNOVATIVE</h4>
              <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Creative & Innovative
                <br />
                Digital Solution
              </h4>
              <div className="flex gap-4">
                <Link
                  href="/pages/contact"
                  className="px-11 py-2 md:px-[52px] transition-all hover:border-white hover:bg-transparent border border-[#00A3F7] text-sm md:text-lg md:py-[16px] bg-[#00A3F7]"
                >
                  Free Quote
                </Link>
                <Link
                  href="/pages/about"
                  className="px-11 py-2 md:px-[52px] text-sm md:text-lg md:py-[16px] transition-all hover:border-[#00A3F7] hover:bg-[#00A3F7] border "
                >
                  About Us
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="absolute inset-0 -z-10">
            <img
              src="/assets/pngs/Rectangle 2.png"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 text-white secong z-10 gap-6 flex flex-col justify-center items-center h-full text-center">
              <h4 className="">CREATIVE & INNOVATIVE</h4>
              <h4 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Creative & Innovative
                <br />
                Digital Design
              </h4>
              <div className="flex gap-4">
                <Link
                  href="/pages/contact"
                  className="px-11 py-2 md:px-[52px] transition-all hover:border-white hover:bg-transparent border border-[#00A3F7] text-sm md:text-lg md:py-[16px] bg-[#00A3F7]"
                >
                  Free Quote
                </Link>
                <Link
                  href="/pages/about"
                  className="px-11 py-2 md:px-[52px] text-sm md:text-lg md:py-[16px] transition-all hover:border-[#00A3F7] hover:bg-[#00A3F7] border "
                >
                  About Us
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <Sample />
    </motion.div>
  );
};

export default HeroSection;
