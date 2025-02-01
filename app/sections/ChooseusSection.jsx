import React from "react";
import Heading from "../components/Heading";

const ChooseusSection = () => {
  return (
    <div>
      <div className="w-[85%] mt-14 mx-auto">
        <div className="container mx-auto">
          <Heading
            ht={"WHY CHOOSE US"}
            hft={"We Are Here To Grow Your"}
            hfb={"Business Exponentially"}
          />
          <div className="loto mt-14 h-full gap-[2rem] md:gap-0 flex flex-wrap md:flex-nowrap">
            <div className="flex h-full flex-col gap-[2rem] md:gap-2">
              <div>
                <div className="bg-[#00A3F7] w-fit p-2">
                  <img
                    className="w-6 h-6"
                    src="/assets/svgs/computer-settings 1.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg my-2">Best In Industry</h2>
                  <p className="text-gray-500">
                    "Best in Industry" is a term used to describe a company,
                    product, service, or individual that is considered the top
                    performer or leader within a particular industry or sector.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#00A3F7] w-fit p-2 mt-6">
                  <img
                    className="w-6 h-6"
                    src="/assets/svgs/computer-settings 1.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg my-2">Award Wining</h2>
                  <p className="text-gray-500">
                    I'd be happy to help you with information about
                    award-winning topics or answer any specific questions you
                    have related to awards.
                  </p>
                </div>
              </div>
            </div>
            <div class="hidden imgres w-[45vw] lg:flex justify-center">
              <img
                src="/assets/pngs/Rectangle 15.png"
                alt="Team Working"
                class=" w-full h-auto object-cover"
              />
            </div>
            <div className="flex h-full flex-col md:ml-5 gap-[2rem] md:gap-2">
              <div>
                <div className="bg-[#00A3F7] w-fit p-2">
                  <img
                    className="w-6 h-6"
                    src="/assets/svgs/computer-settings 1.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg my-2">Professional Staff</h2>
                  <p className="text-gray-500">
                    Professional staff typically refers to individuals who work
                    in a professional capacity within an organization or
                    industry. These individuals are often highly skilled or
                    educated
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-[#00A3F7] w-fit p-2 mt-6">
                  <img
                    className="w-6 h-6"
                    src="/assets/svgs/computer-settings 1.svg"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg my-2">24/7 Support</h2>
                  <p className="text-gray-500">
                    "24/7 support" refers to a customer service or technical
                    support system that is available around the clock, 24 hours
                    a day, 7 days a week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseusSection;
