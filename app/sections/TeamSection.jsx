import React from "react";
import Heading from "../components/Heading";

const TeamSection = () => {
  return (
    <div className="w-[85%] mt-14 mx-auto">
      <div className="container mx-auto">
        <Heading
          ht={"TEAM MEMBERS"}
          hft={"Professional Staffs Ready To"}
          hfb={"Help Your Business"}
        />
        <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42.png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Alex Taylor
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">Engineer</p>
              </div>
            </div>
          </div>
          <div className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42 (1).png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Lisa Patel
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">
                  Professor
                </p>
              </div>
            </div>
          </div>
          <div className="text-center bg-[#EAF9FF]">
            <img className="w-[100%]" src="/assets/pngs/Rectangle 42 (2).png" />
            <div className="p-4">
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-[#00A3F7] font-semibold text-xl md:text-2xl"
                >
                  Rachel Taylor
                </a>
                <p className="text-gray-500 uppercase text-sm mb-3">
                  Scientist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
