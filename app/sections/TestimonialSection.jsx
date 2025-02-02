import React from "react";
import Heading from "../components/Heading";

const TestimonialSection = () => {
  return (
    <div className="w-[90%] mt-14 mx-auto">
      <div className="container mx-auto">
        <div className="flex items-center justify-center my-2">
          <img className=" w-[9%]" src="/assets/newsvgs/Group 20.svg" alt="" />
        </div>
        <Heading
          ht={"TESTIMONIAL"}
          hft={"What Our Client Say About"}
          hfb={"Over Digital Services"}
        />
        <section className="leading-7 text-gray-900 bg-white">
          <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
            <div
              id="pricing"
              className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3"
            >
              {/* <!-- Slide 1 --> */}
              <div className="relative w-full bg-[#EAF9FF] z-10 flex flex-col max-w-md p-4 mx-auto my-0 lg:-mr-3 sm:my-0 sm:p-6 md:my-2 md:p-8">
                <div class="flex items-center my-3">
                  <img
                    src="/assets/pngs/Rectangle 24.png"
                    alt="Avatar"
                    class="w-12 h-12 rounded-sm mr-4  border-purple-300"
                  />
                  <div>
                    <h4 class="font-semibold ml-2 text-[#00A1F4]">
                      Michael Anderson
                    </h4>
                    <p class="text-gray-600">PROFESSION</p>
                  </div>
                </div>
                <hr className="bg-gray-400 p-[.5px]" />
                <p class="text-sm font-medium my-4 text-gray-500">
                  The Information Technology (IT) field encompasses a wide range
                  of professions and career opportunities. IT professionals work
                  with technology systems and software to design, develop,
                  manage, and maintain various aspects of computing and
                  information systems.
                </p>
              </div>
              {/* <!-- Slide 2 --> */}
              <div className="relative w-full z-20 lg:shadow-2xl flex flex-col max-w-md p-2 mx-auto my-0 bg-white sm:p-6 md:px-12 md:py-10">
                <div class="flex items-center my-3">
                  <img
                    src="/assets/pngs/Rectangle 25.png"
                    alt="Avatar"
                    class="w-12 h-12 rounded-sm mr-4  border-purple-300"
                  />
                  <div>
                    <h4 class="font-semibold ml-2 text-[#00A1F4]">
                      Emily Davis
                    </h4>
                    <p class="text-gray-600">Business Women</p>
                  </div>
                </div>
                <hr className="bg-gray-400 p-[.5px]" />
                <p class="text-sm font-medium my-4 text-gray-500">
                  "Business women" refers to women who are actively. engaged in
                  various aspects of the business world. This can include women
                  who are entrepreneurs, business owners, corporate executives,
                  managers, professionals, or employees in various industries.
                </p>
              </div>
              {/* <!-- Slide 3 --> */}
              <div className="relative w-full bg-[#EAF9FF] z-10 flex flex-col max-w-md p-4 mx-auto my-0 lg:-ml-3 sm:my-0 sm:p-6 md:my-2 md:p-8">
                <div class="flex items-center my-3">
                  <img
                    src="/assets/pngs/Rectangle 26.png"
                    alt="Avatar"
                    class="w-12 h-12 rounded-sm mr-4  border-purple-300"
                  />
                  <div>
                    <h4 class="font-semibold ml-2 text-[#00A1F4]">
                      James Wilson
                    </h4>
                    <p class="text-gray-600">Application Developer</p>
                  </div>
                </div>
                <hr className="bg-gray-400 p-[.5px]" />
                <p class="text-sm font-medium my-4 text-gray-500">
                  Application development refers to the process of creating
                  software applications for various platforms and devices, such
                  as mobile phones, desktop computers, web browsers, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialSection;
