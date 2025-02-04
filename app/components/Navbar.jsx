"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navbarHandler = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // max-w-[74rem]
  return (
    <div>
      <nav
        className={`${
          scrolled ? "bg-gray-800" : "bg-transparent"
        } roboto border-b fixed  top-0 left-0 w-full z-50`}
      >
        <div className="bg-[#061E42]">
          <div className="hidden container mx-auto max-w-[75rem] px-4 md:flex items-center justify-between text-white py-3">
            <div className="flex ml-2 gap-4 lg:ml-8">
              <div className="flex items-center gap-2">
                <img src="/assets/svgs/mdi_location.svg" alt="" />
                <h3 className="text-sm">
                  Silver trade center, Uttran, Surat, 395006
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-4"
                  src="/assets/newsvgs/call white.svg"
                  alt=""
                />
                <h3 className="text-sm">+92 1234567890</h3>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-5"
                  src="/assets/svgs/ic_baseline-mail.svg"
                  alt=""
                />
                <h3 className="text-sm">info@xyz.com</h3>
              </div>
            </div>
            <div className="flex mr-2 lg:mr-4 items-center justify-center space-x-2">
              <a
                href="#"
                className="border hover:bg-[#00A3F7] rounded-full p-1"
              >
                <img src="/assets/svgs/mdi_twitter.svg" alt="" />
              </a>
              <a
                href="#"
                className="border hover:bg-[#00A3F7] rounded-full p-1"
              >
                <img src="/assets/svgs/ri_facebook-fill.svg" alt="" />
              </a>
              <a
                href="#"
                className="border hover:bg-[#00A3F7] rounded-full p-1"
              >
                <img src="/assets/svgs/ri_linkedin-fill.svg" alt="" />
              </a>
              <a
                href="#"
                className="border hover:bg-[#00A3F7] rounded-full p-1"
              >
                <img
                  className="w-[17px]"
                  src="/assets/svgs/ri_instagram.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex navscroll container mx-auto max-w-[75rem] justify-between items-center h-16 md:h-20 lg:h-24 px-4 sm:px-8 lg:px-18 text-white">
          <Link href="/" className="flex items-center">
            <img src="/assets/svgs/logo.svg" alt="Logo" />
          </Link>

          <ul className="hidden lg:flex gap-8 text-[15px] font-[600]">
            <li>
              <Link
                href="/"
                className="text-[#00A3F7] transition-all hover:text-[#00A3F7]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/pages/about"
                className="text-gray-200 transition-all hover:text-[#00A3F7]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/pages/services"
                className="text-gray-200 transition-all hover:text-[#00A3F7]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/pages/blogs"
                className="text-gray-200 transition-all hover:text-[#00A3F7]"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href="/pages/prices"
                className="text-gray-200 transition-all hover:text-[#00A3F7]"
              >
                Prices
              </Link>
            </li>
            <li>
              <Link
                href="/pages/contact"
                className="text-gray-200 transition-all hover:text-[#00A3F7]"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <img src="/assets/newsvgs/search.svg" alt="Search" />
            <Link
              href="/download"
              className="hidden transition-all hover:border-white hover:bg-transparent border border-[#00A3F7] text-center lg:flex text-gray-100 bg-[#00A3F7] py-2 px-3 loto text-[16px]"
            >
              Download Pro Version
            </Link>
            <button className="lg:hidden text-2xl" onClick={navbarHandler}>
              <i className="fa-solid fa-bars">=</i>
            </button>
          </div>
        </div>

        <div
          id="mobileMenu"
          className="hidden container mx-auto max-w-7xl px-4 bg-gray-800 text-white p-5 space-y-3"
        >
          <Link
            onClick={navbarHandler}
            href="/"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Home
          </Link>
          <Link
            onClick={navbarHandler}
            href="/pages/about"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            About Us
          </Link>
          <Link
            onClick={navbarHandler}
            href="/pages/services"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Services
          </Link>
          <Link
            onClick={navbarHandler}
            href="/pages/blogs"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Blogs
          </Link>
          <Link
            onClick={navbarHandler}
            href="/pages/prices"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Prices
          </Link>
          <Link
            onClick={navbarHandler}
            href="/pages/contact"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Contact
          </Link>
          <Link
            onClick={navbarHandler}
            href="/download"
            className="flex text-gray-100 text-center bg-[#00A3F7] py-2 px-3 loto text-[16px]"
          >
            Download Pro Version
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
