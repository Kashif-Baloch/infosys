import React from "react";
import Heading from "../components/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import "swiper/css/navigation";

const TeamSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="container mx-auto max-w-[74rem] px-8 mt-14"
    >
      <div className="container mx-auto">
        <Heading
          ht={"TEAM MEMBERS"}
          hft={"Professional Staffs Ready To"}
          hfb={"Help Your Business"}
        />
        <Swiper
          slidesPerView={3}
          spaceBetween={"30px"}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: "0" }, // 1 slide on mobile
            768: { slidesPerView: 2, spaceBetween: "5px" }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on larger screens
          }}
          className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <SwiperSlide className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42.png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Alex Taylor
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">Engineer</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42 (1).png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Lisa Patel
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">
                  Professor
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42 (2).png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Rachel Taylor
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">
                  Scientist
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42 (2).png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Rachel Taylor
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">
                  Scientist
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default TeamSection;
