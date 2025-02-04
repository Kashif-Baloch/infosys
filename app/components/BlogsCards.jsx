"use client";
import React, { useState } from "react";
import BlogsComponent from "./BlogsComponent";
import SideBar from "./SideBar";

const BlogsCards = () => {
  const blogs = [
    {
      id: "web design",
      image: "/assets/blogspng/Rectangle 44 (1).png",
      title: "How To Build A Website...",
    },
    {
      id: "app development",
      image: "/assets/blogspng/Rectangle 44 (1).png",
      title: "How To Build A Website...",
    },
    {
      id: "keyword research",
      image: "/assets/blogspng/Rectangle 44 (2).png",
      title: "How To Build A Website...",
    },
    {
      id: "web development",
      image: "/assets/blogspng/Rectangle 44 (3).png",
      title: "How To Build A Website...",
    },
    {
      id: "email markating",
      image: "/assets/blogspng/Rectangle 44 (4).png",
      title: "How To Build A Website...",
    },
    {
      id: "web development",
      image: "/assets/blogspng/Rectangle 44 (5).png",
      title: "How To Build A Website...",
    },
    {
      id: "web development",
      image: "/assets/blogspng/Rectangle 44 (6).png",
      title: "How To Build A Website...",
    },
    {
      id: "app development",
      image: "/assets/blogspng/Rectangle 44 (7).png",
      title: "How To Build A Website...",
    },
  ];

  const [blog, setBlog] = useState(blogs);

  const handleFilter = (e) => {
    const filteredblogs = blogs.filter((elem) => {
      return e.target.innerText.toLowerCase() == elem.id.toLowerCase();
    });

    setBlog(filteredblogs);
  };

  const handleSearch = (e) => {
    if (e.target.value == "") {
      setBlog(blogs);
    } else {
      const filteredblogs = blogs.filter((elem) => {
        return elem.id.toLowerCase().includes(e.target.value.toLowerCase());
      });

      setBlog(filteredblogs);
    }
  };

  return (
    <div>
      <div className="container flex-col-reverse lg:flex-row mx-auto flex flex-wrap py-6">
        <section className="w-full lg:w-2/3 flex flex-col ">
          <BlogsComponent blog={blog} />
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
        <SideBar
          blog={blog}
          handleSearch={handleSearch}
          handleFilter={handleFilter}
        />
      </div>
    </div>
  );
};

export default BlogsCards;
