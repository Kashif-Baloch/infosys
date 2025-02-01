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

  return (
    <div>
      <nav
        className={`${
          scrolled ? "bg-gray-800" : "bg-transparent"
        } roboto border-b fixed  top-0 left-0 w-full z-50`}
      >
        <div className="bg-[#061E42] hidden md:flex items-center justify-between text-white p-3">
          <div className="flex gap-4 ml-2 lg:ml-20">
            <div className="flex items-center gap-2">
              <img src="/assets/svgs/mdi_location.svg" alt="" />
              <h3 className="text-sm">
                Silver trade center, Uttran, Surat, 395006
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-4"
                src="/assets/svgs/phone-call (1) 1 (1).svg"
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
          <div className="flex mr-3 lg:mr-16 items-center justify-center space-x-2">
            <a href="#" className="border rounded-full p-1">
              <img src="/assets/svgs/mdi_twitter.svg" alt="" />
            </a>
            <a href="#" className="border rounded-full p-1">
              <img src="/assets/svgs/ri_facebook-fill.svg" alt="" />
            </a>
            <a href="#" className="border rounded-full p-1">
              <img src="/assets/svgs/ri_linkedin-fill.svg" alt="" />
            </a>
            <a href="#" className="border rounded-full p-1">
              <img
                className="w-[17px]"
                src="/assets/svgs/ri_instagram.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex navscroll justify-between items-center h-16 md:h-20 lg:h-24 px-5 sm:px-10 lg:px-20 text-white">
          <Link href="/" className="flex items-center">
            <img src="/assets/svgs/logo.svg" alt="Logo" />
          </Link>

          <ul className="hidden lg:flex gap-8 text-[15px] font-[600]">
            <li>
              <Link href="/" className="text-[#00A3F7]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="text-gray-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/pages/services" className="text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pages/blogs" className="text-gray-200">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/pages/prices" className="text-gray-200">
                Prices
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <img src="/assets/svgs/magnifying-glass 1.svg" alt="Search" />
            <Link
              href="/download"
              className="hidden text-center lg:flex text-gray-100 bg-[#00A3F7] py-2 px-3 loto text-[16px]"
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
          className="hidden bg-gray-800 text-white p-5 space-y-3"
        >
          <Link href="/" className="block hover:bg-gray-700 py-2 px-4 rounded">
            Home
          </Link>
          <Link
            href="/pages/about"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            About Us
          </Link>
          <Link
            href="/pages/services"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Services
          </Link>
          <Link
            href="/pages/blogs"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Blogs
          </Link>
          <Link
            href="/pages/prices"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Prices
          </Link>
          <Link
            href="/pages/contact"
            className="block hover:bg-gray-700 py-2 px-4 rounded"
          >
            Contact
          </Link>
          <Link
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
