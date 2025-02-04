import React from "react";
import Heading from "../components/Heading";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogsSection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto max-w-[74rem] px-8 mt-14">
        <div className="container mx-auto">
          <Heading
            ht={"LATEST BLOGS"}
            hft={"Read The Latest Articles From"}
            hfb={"Our Blog Post"}
          />
          <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(3)
              .fill()
              .map((elem, index) => {
                return (
                  <div key={index} className="relative bg-[#EAF9FF]">
                    <a className="bg-[#00A3F7] text-white py-2 px-6 absolute top-0 left-0 z-10">
                      Web Design
                    </a>
                    <img
                      className="w-full"
                      src="/assets/blogspng/Rectangle 44 (1).png"
                    />
                    <div className="p-4">
                      <div className="flex gap-3">
                        <div className="flex gap-3">
                          <img
                            src="/assets/svgs/material-symbols_person-outline.svg"
                            alt=""
                          />
                          <h1 className="text-gray-500 lg-text-[16px]">
                            Daniel Lee
                          </h1>
                        </div>
                        <div className="flex gap-3">
                          <img
                            src="/assets/svgs/clarity_date-solid.svg"
                            alt=""
                          />
                          <h1 className="text-gray-500 lg-text-[16px]">
                            01, Jan 2025
                          </h1>
                        </div>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold ml-5">
                      How To Build A Website
                    </h2>
                    <p className="text-sm text-gray-500 w-[88%] my-4 mx-auto">
                      Building a website involves several steps, from planning
                      and design to development and deployment
                    </p>

                    <Link
                      className="text-[#00A3F7] flex items-center gap-3 ml-5 my-6"
                      href="/pages/blog/blog-title"
                    >
                      Read More{" "}
                      <span>
                        <img src="/assets/svgs/right-arrow 1.svg" alt="" />
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogsSection;
