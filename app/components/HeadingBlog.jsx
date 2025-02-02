import React from "react";

const HeadingBlog = ({ ht }) => {
  return (
    <div className="flex items-start flex-col justify-start text-center">
      <h3 className="text-black font-bold text-lg my-1">{ht}</h3>
      <img className="w-[27%]" src="/assets/svgs/Group 11.svg" alt="" />
    </div>
  );
};

export default HeadingBlog;
