import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <section className="text-gray-600 container mx-auto max-w-[74rem] body-font">
        <div className="container mx-auto gap-12 flex px-5 py-24 lg:flex-row flex-col items-center">
          <div className="lg:flex-grow lg:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h3 className="text-[#00A3F7] pb-7 font-semibold">About Us</h3>
            <h1 className="title-font sm:text-[34px] text-2xl font-bold mb-4 text-gray-900">
              The Best IT Solution With 10 Years of
              <br className="hidden mx lg:inline-block" />
              Experience
            </h1>
            <img className="w-[15%]" src="/assets/svgs/Group 9.svg" alt="" />
            <p className="mb-8 max-w-[86%] mt-6 leading-relaxed">
              Selecting the best IT solution with 10 years of experience
              involves various factors, such as the specific needs of your
              organization, budget constraints, and the nature of the IT
              challenges you want to address.
            </p>
            <div className="flex justify-center flex-wrap">
              <div className="flex w-[50%] items-center gap-4">
                <img src="/assets/svgs/check.svg" alt="" />
                <h1 className="text-black text-sm md:text-[16px]">
                  Award Winning
                </h1>
              </div>
              <div className="flex w-[50%] items-center gap-4">
                <img src="/assets/svgs/check.svg" alt="" />
                <h1 className="text-black text-sm md:text-[16px]">
                  24/7 Support
                </h1>
              </div>
              <div className="flex w-[50%] items-center gap-4">
                <img src="/assets/svgs/check.svg" alt="" />
                <h1 className="text-black text-sm md:text-[16px]">
                  Professional Staff
                </h1>
              </div>
              <div className="flex w-[50%] items-center gap-4">
                <img src="/assets/svgs/check.svg" alt="" />
                <h1 className="text-black text-sm md:text-[16px]">
                  Fair Prices
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-5">
              <div className="bg-[#00A3F7] p-4">
                <img
                  className="w-6 h-6"
                  src="/assets/svgs/phone-call (1) 1 (1).svg"
                  alt=""
                />
              </div>
              <div className="text-[#00A3F7]">
                <h3 className="text-black text-sm">Call To Ask Any Question</h3>
                <h2>+91 1234567890</h2>
              </div>
            </div>
            <Link
              href="/pages/contact"
              className="flex mt-8 hover:text-black text-gray-100 hover:bg-transparent hover:border-gray-700 border border-[#00a3f7] bg-[#00A3F7] py-2 px-3 loto text-[16px]"
            >
              Request A Quote
            </Link>
          </div>
          <div className="lg:max-w-[28rem] lg:w-full  w-5/6">
            <img
              className="object-cover w-full object-center rounded"
              alt="hero"
              src="/assets/pngs/Rectangle 10.png"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
