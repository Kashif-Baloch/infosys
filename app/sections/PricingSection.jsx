import React from "react";
import Heading from "../components/Heading";

const PricingSection = () => {
  return (
    <div className="w-[90%] mt-14 mx-auto">
      <div className="container mx-auto">
        <Heading
          ht={"PRICING PLAN"}
          hft={"We Are Offering Competitive"}
          hfb={"Prices For Our Clients"}
        />
        <section className="leading-7 text-gray-900 bg-white">
          <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
            <div
              id="pricing"
              className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
            >
              {/* <!-- Price 1 --> */}
              <div className="relative w-full h-fit  bg-[#EAF9FF] z-10 flex flex-col max-w-md p-4 mx-auto my-0 lg:-mr-3 sm:my-0 sm:p-6 md:my-2 md:p-12">
                <h3 className="m-0 text-[#00A3F7] font-bold leading-tight tracking-tight border-0 border-gray-200 text-xl">
                  Basic Plan
                </h3>
                <h4 className=" text-gray-500">For Small Size Businessess</h4>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                  <p className="box-border m-0 text-4xl font-semibold leading-none border-solid">
                    $49.00
                  </p>
                  <p className="box-border m-0 border-solid">/per month</p>
                </div>
                <ul className="p-0 mt-4 leading-3 text-gray-900 border-0 border-gray-200">
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">HTML & CSS</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Bootstrap v5</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Responsive Layout</h4>
                    <img
                      className="w-6"
                      src="/assets/svgs/check (2) 1.svg"
                      alt=""
                    />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Cross-Browser Support</h4>
                    <img
                      className="w-6"
                      src="/assets/svgs/check (2) 1.svg"
                      alt=""
                    />
                  </li>
                </ul>
                <a
                  className="bg-[#00A3F7] mt-8 px-3 py-1 text-sm w-fit text-white"
                  href="/"
                >
                  Order Now
                </a>
              </div>
              {/* <!-- Price 2 --> */}
              <div className="relative w-full h-fit z-20 lg:shadow-2xl flex flex-col max-w-md p-4 mx-auto my-0 bg-white sm:p-6 md:px-12 md:py-[54px]">
                <h3 className="m-0 text-[#00A3F7] font-bold leading-tight tracking-tight border-0 border-gray-200 text-xl">
                  Standard Plan
                </h3>
                <h4 className=" text-gray-500">For Small Size Businessess</h4>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                  <p className="box-border m-0 text-4xl font-semibold leading-none border-solid">
                    $49.00
                  </p>
                  <p className="box-border m-0 border-solid">/per month</p>
                </div>
                <ul className="p-0 mt-4 leading-3 text-gray-900 border-0 border-gray-200">
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">HTML & CSS</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Bootstrap v5</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Responsive Layout</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Cross-Browser Support</h4>
                    <img
                      className="w-6"
                      src="/assets/svgs/check (2) 1.svg"
                      alt=""
                    />
                  </li>
                </ul>
                <a
                  className="bg-[#00A3F7] mt-8 px-3 py-1 text-sm w-fit text-white"
                  href="/"
                >
                  Order Now
                </a>
              </div>
              {/* <!-- Price 3 --> */}
              <div className="relative w-full h-fit bg-[#EAF9FF] z-10 flex flex-col  max-w-md p-4 mx-auto my-0 lg:-ml-3 sm:my-0 sm:p-6 md:my-2 md:p-12">
                <h3 className="m-0 text-[#00A3F7] font-bold leading-tight tracking-tight border-0 border-gray-200 text-xl">
                  Advanced Plan
                </h3>
                <h4 className=" text-gray-500">For Small Size Businessess</h4>
                <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                  <p className="box-border m-0 text-4xl font-semibold leading-none border-solid">
                    $49.00
                  </p>
                  <p className="box-border m-0 border-solid">/per month</p>
                </div>
                <ul className="p-0 mt-4 leading-3 text-gray-900 border-0 border-gray-200">
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">HTML & CSS</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Bootstrap v5</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Responsive Layout</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                  <li className="flex items-center justify-between w-full mb-2 font-semibold text-left border-solid">
                    <h4 className="text-gray-500">Cross-Browser Support</h4>
                    <img className="w-6" src="/assets/svgs/check.svg" alt="" />
                  </li>
                </ul>
                <a
                  className="bg-[#00A3F7] mt-8 px-3 py-1 text-sm w-fit text-white"
                  href="/"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PricingSection;
