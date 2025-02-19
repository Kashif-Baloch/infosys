import React from "react";
import Link from "next/link";

const BlogsComponent = ({ blog }) => {
  return (
    <div>
      <div>
        <div className="w-[85%] mx-auto">
          <div className="container mx-auto">
            <div className="grid transition-all mt-6 grid-cols-1 md:grid-cols-2 gap-6">
              {blog.map((elem, index) => {
                return (
                  <div
                    key={index}
                    className="relative transition-all bg-[#EAF9FF]"
                  >
                    <a className="bg-[#00A3F7] text-white py-2 px-6 absolute top-0 left-0 z-10">
                      Web Design
                    </a>
                    <img className="w-[100%]" src={elem.image} />
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
      </div>
    </div>
  );
};

export default BlogsComponent;
