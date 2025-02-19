import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const SponserSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto max-w-[74rem] px-8 mt-20 mb-12"
    >
      <div className="container mx-auto">
        <Marquee
          loop={0}
          pauseOnHover={true}
          className="flex items-center gap-8 lg:gap-0 justify-center mt-2 md:justify-around"
        >
          <div className="text-gray-400 mx-14 ">
            <img src="/assets/svgs/Google.svg" alt="" className="w-28" />
          </div>

          <div className="text-gray-400 mx-14 ">
            <img src="/assets/svgs/apple.svg" alt="" className="w-36" />
          </div>

          <div className="text-gray-400 mx-14 ">
            <img
              src="/assets/svgs/microsoft_logos.svg"
              alt=""
              className="w-32"
            />
          </div>

          <div className="text-gray-400 mx-14 ">
            <img src="/assets/svgs/Vector (1).svg" alt="" className="w-28" />
          </div>

          <div className="text-gray-400 mx-14 ">
            <img src="/assets/svgs/Yahoo!.svg" alt="" className="w-32" />
          </div>

          <div className="text-gray-400 mx-14 ">
            <img src="/assets/svgs/cib_dell.svg" alt="" className="w-16" />
          </div>
        </Marquee>
      </div>
    </motion.div>
  );
};

export default SponserSection;
