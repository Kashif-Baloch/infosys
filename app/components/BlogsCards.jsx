import React from "react";
import BlogsComponent from "./BlogsComponent";
import SideBar from "./SideBar";

const BlogsCards = () => {
  return (
    <div>
      <div className="container flex-col-reverse lg:flex-row mx-auto flex flex-wrap py-6">
        <section className="w-full lg:w-2/3 flex flex-col ">
          <BlogsComponent />
          <div className="flex lg:w-[85%] mx-auto justify-start items-center py-8">
            <ul className="flex items-center justify-start">
              <li className="px-3 text-[#00A3F7] py-[3px] border">
                <img src="/assets/newsvgs/pagin arrow.svg" alt="" />
              </li>
              <li className="px-3 bg-[#00A3F7] py-1 text-white border">1</li>
              <li className="px-3 text-[#00A3F7] py-1 border">2</li>
              <li className="px-3 text-[#00A3F7] py-1 border">3</li>
              <li className="px-3 text-[#00A3F7] py-[3px] border">
                <img
                  className="rotate-180"
                  src="/assets/newsvgs/pagin arrow.svg"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </section>
        <SideBar />
      </div>
    </div>
  );
};

export default BlogsCards;
