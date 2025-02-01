import React from "react";

const Sample = () => {
  return (
    <div className="w-full lg:w-[70%] mt-[-4.75rem] mx-auto bg-[#00A3F7] justify-center flex-col md:flex-row flex items-center">
      <div className="flex w-full lg:w-[40%] items-center px-16 py-5 gap-3">
        <div className="bg-white h-full p-[10px]">
          <img src="/assets/svgs/customer 1.svg" alt="Item" />
        </div>
        <div className="text-white flex flex-col">
          <h4 className="text-[0.675rem] lg:text-[16px] mt-2 mb-0 font-semibold">
            Happy Client
          </h4>
          <h4 className="lg:text-[35px] -mt-[5px] m-0 font-semibold">12345 </h4>
        </div>
      </div>
      <div className="flex w-full lg:w-[40%] items-center px-16 py-5 gap-3 bg-[#EAF9FF]">
        <div className="bg-[#00A3F7] h-full p-[10px]">
          <img src="/assets/svgs/check 1.svg" alt="Item" />
        </div>
        <div className=" flex flex-col">
          <h4 className="text-[0.675rem] lg:text-[16px] text-[#00A3F7] mt-2 mb-0 font-semibold">
            Project Done
          </h4>
          <h4 className="lg:text-[35px] text-black -mt-[5px] m-0 font-semibold">
            12345
          </h4>
        </div>
      </div>
      <div className="flex w-full lg:w-[40%] items-center px-16 py-5 gap-3">
        <div className="bg-white h-full p-[10px]">
          <img src="/assets/svgs/customer 1 (1).svg" alt="Item" />
        </div>
        <div className="text-white flex flex-col ">
          <h4 className="text-[0.675rem] lg:text-[16px] text-sm mt-2 mb-0 font-semibold">
            Award Win
          </h4>
          <h4 className="lg:text-[35px] -mt-[5px] m-0 font-semibold">12345 </h4>
        </div>
      </div>
    </div>
  );
};

export default Sample;

{
  /* <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
<dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
  Data Sources, including APIs and databases
</dt>
<dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
  <span>30</span>+
</dd>
</div>
<div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
<dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
  Analytic Tools and Machine Learning Models
</dt>
<dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
  <span>100</span>+
</dd>
</div>
<div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
<dt className="order-2 mt-2 text-lg font-normal leading-6 text-gray-500 dark:text-gray-300">
  Real-time Data Streams and Dashboards
</dt>
<dd className="order-1 text-5xl font-bold tracking-tight text-green-600 dark:text-green-400">
  <span>10</span>+
</dd>
</div> */
}
