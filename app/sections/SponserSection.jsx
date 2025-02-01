import React from "react";

const SponserSection = () => {
  return (
    <div className="w-[90%] mt-16  mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center gap-8 lg:gap-0 justify-center mt-2 md:justify-around">
          <div className="text-gray-400 ">
            <img src="/assets/svgs/Google.svg" alt="" className="w-28" />
          </div>

          <div className="text-gray-400 ">
            <img src="/assets/svgs/apple.svg" alt="" className="w-36" />
          </div>

          <div className="text-gray-400 ">
            <img
              src="/assets/svgs/microsoft_logos.svg"
              alt=""
              className="w-32"
            />
          </div>

          <div className="text-gray-400 ">
            <img src="/assets/svgs/Vector (1).svg" alt="" className="w-28" />
          </div>

          <div className="text-gray-400 ">
            <img src="/assets/svgs/Yahoo!.svg" alt="" className="w-32" />
          </div>

          <div className="text-gray-400 ">
            <img src="/assets/svgs/cib_dell.svg" alt="" className="w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponserSection;
