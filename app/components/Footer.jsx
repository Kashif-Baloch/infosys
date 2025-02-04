"use client";

import Link from "next/link";
import React from "react";

// components/Footer.jsx
const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-[#061E42] relative mt-14 pt-8 text-white ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {/* Company Info */}
        <div className="bg-[#00A3F7] lg:absolute top-0 left-20 h-full lg:w-[23%] text-white p-8 lg:col-span-1 flex flex-col justify-center min-h-full">
          <div className="flex item-center justify-center">
            <img src="/assets/svgs/logo.svg" alt="" />
          </div>
          <p className="mt-4 text-sm">
            I'd be happy to provide you with information about an IT company.
            However, I would need more specific details or the name of the
            company you have in mind to provide you with accurate information.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-1 w-[85%] text-black outline-none"
            />
            <button
              type="submit"
              className="text-center w-24 text-sm font-bold py-4 bg-[#061E42] text-white"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="hidden lg:block w-[90%]"></div>

        {/* Get In Touch */}
        <div className="flex flex-col md:ml-16 justify-center mt-6 lg:-mt-6">
          <h3 className="text-xl font-semibold border-b-4 border-[#00A3F7] py-1 w-fit">
            Get to Touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <img className="w-4" src="/assets/svgs/mdi_location.svg" alt="" />
              135 Street, New York, USA
            </li>
            <li className="flex gap-2">
              <img
                className="w-4"
                src="/assets/svgs/ic_baseline-mail.svg"
                alt=""
              />
              zzz@gmail.com
            </li>
            <li className="flex gap-2">
              <img
                className="w-4"
                src="/assets/svgs/phone-call (1) 1 (1).svg"
                alt=""
              />
              +91 1111111111
            </li>
          </ul>
          <div className="mt-4 flex space-x-2">
            <a
              href="#"
              className="bg-[#00A3F7] border border-[#00A3F7] hover:bg-transparent hover:border-white p-3"
            >
              <img src="/assets/svgs/mdi_twitter.svg" alt="" />
            </a>
            <a
              href="#"
              className="bg-[#00A3F7] border border-[#00A3F7] hover:bg-transparent hover:border-white p-3"
            >
              <img src="/assets/svgs/ri_facebook-fill.svg" alt="" />
            </a>
            <a
              href="#"
              className="bg-[#00A3F7] border border-[#00A3F7] hover:bg-transparent hover:border-white p-3"
            >
              <img src="/assets/svgs/ri_linkedin-fill.svg" alt="" />
            </a>
            <a
              href="#"
              className="bg-[#00A3F7] border border-[#00A3F7] hover:bg-transparent hover:border-white p-3"
            >
              <img src="/assets/svgs/ri_instagram.svg" alt="" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col mt-6 lg:mt-0 lg:ml-16 justify-center">
          <h3 className="text-xl font-semibold border-b-4 border-[#00A3F7] py-1 w-fit">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <Link
              href="/"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Home
            </Link>
            <Link
              href="/pages/about"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              About Us
            </Link>

            <Link
              href="/pages/services"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Our Services
            </Link>

            <Link
              href="/pages/about"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Meet The Team
            </Link>

            <Link
              href="/pages/blogs"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Latest Blog
            </Link>

            <Link
              href="/pages/contact"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Contact Us
            </Link>
          </ul>
        </div>

        {/* Popular Links */}
        <div className="flex flex-col md:ml-16 lg:ml-0  mt-6 md:mt-0 justify-center">
          <h3 className="text-xl font-semibold border-b-4 border-[#00A3F7] py-1 w-fit">
            Popular Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <Link
              href="/"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Home
            </Link>

            <Link
              href="/pages/about"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              About Us
            </Link>

            <Link
              href="/pages/services"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Our Services
            </Link>

            <Link
              href="/pages/about"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Meet The Team
            </Link>

            <Link
              href="/pages/blogs"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Latest Blog
            </Link>

            <Link
              href="/pages/contact"
              className="flex gap-2 hover:text-[#00A3F7] cursor-pointer"
            >
              <img className="w-4" src="/assets/svgs/Vector.svg" alt="" />
              Contact Us
            </Link>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10 mb-0 bg-[#04142B] py-4">
        <p>© IT Agency Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
