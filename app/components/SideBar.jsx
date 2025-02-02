import React from "react";
import Link from "next/link";
import HeadingBlog from "./HeadingBlog";

const SideBar = () => {
  const bloglist = [
    {
      text: "Web Design",
    },
    {
      text: "App Development",
    },
    {
      text: "Web Development",
    },
    {
      text: "Keyword Research",
    },
    {
      text: "Email Markating",
    },
  ];

  const category = [
    {
      title: "Design",
    },
    {
      title: "Developing",
    },
    {
      title: "Marketing",
    },
    {
      title: "SEO",
    },
    {
      title: "Wrting",
    },
    {
      title: "Consulting",
    },
    {
      title: "Design",
    },
    {
      title: "Developnig",
    },
    {
      title: "Marketing",
    },
    {
      title: "SEO",
    },
    {
      title: "Wrting",
    },
    {
      title: "Consulting",
    },
  ];

  return (
    <aside className="w-full lg:w-1/3 flex flex-col items-center">
      <div className="w-full flex flex-col p-6">
        <div className="flex ">
          <input
            type="text"
            placeholder="Keywords"
            className="px-4 lg:w-[85%] text-black border-2 border-gray-400 outline-none"
          />
          <button className="text-center flex items-center justify-center p-3 text-sm font-bold py-2 bg-[#00A3F7] text-white">
            <img src="/assets/newsvgs/search white.svg" alt="" />
          </button>
        </div>

        <div className="mt-6">
          <HeadingBlog ht="Category" />
          <div className="mt-3">
            {bloglist.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 my-2 px-3 py-1 bg-[#EAF9FF]"
                >
                  <img src="/assets/svgs/right-arrow 1.svg" alt="" />
                  <h2>{elem.text}</h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 md:w-[90%] md:mx-auto">
          <HeadingBlog ht="Recent Post" />
          <div className="mt-6">
            {bloglist.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 my-2 bg-[#EAF9FF]"
                >
                  <img
                    className="h-12 text-sm w-12 cover object-fit"
                    src="/assets/blogspng/Rectangle 44 (1).png"
                    alt=""
                  />
                  <h2 className="font-semibold ">
                    Lorem ipsum dolor sit amet adipi sicing.
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-[90%] mt-10 flex justify-center items-center md:mx-auto">
          <img
            className="w-full"
            src="/assets/blogspng/Rectangle 62.png"
            alt=""
          />
        </div>
        <div className="md:w-[90%] mt-10 flex flex-col md:mx-auto">
          <HeadingBlog ht="Recent Post" />
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            {category.map((elem, index) => {
              return (
                <span key={index} className="py-1 px-2 bg-[#EAF9FF]">
                  {elem.title}
                </span>
              );
            })}
          </div>
        </div>

        <div className="md:w-[90%] mt-10 flex flex-col md:mx-auto">
          <HeadingBlog ht="Plain Text" />
          <div className="bg-[#EAF9FF] mt-3 text-center flex flex-col justify-center items-center p-10 gap-y-3 ">
            <p className="text-gray-500  text-sm">
              I'm just a text-based Al and I'm unable to make phone calls.
              However, if you're looking to request a quote from a specific
              business
            </p>
            <Link
              className="px-2 py-1 text-sm text-white bg-[#00A3F7]"
              href="/"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
