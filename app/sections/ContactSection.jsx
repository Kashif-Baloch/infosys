import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="container mx-auto max-w-[74rem] px-10 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div className="flex flex-col mb-16 md:mb-0">
          <h3 className="text-[#00A3F7] text-lg font-semibold pb-10">
            Request A Quote
          </h3>
          <h1 className="title-font sm:text-[34px] text-2xl font-bold mb-4 text-gray-900">
            Need A Free Quote? Please Feel Free to Contact Us
          </h1>
          <img className="w-[15%]" src="/assets/svgs/Group 9.svg" alt="" />
          <div className="flex justify-between my-6">
            <div className="flex items-center gap-3">
              <img src="/assets/svgs/reply 1.svg" alt="" />
              <h2 className="text-black font-bold">Reply within 24 hours</h2>
            </div>
            <div className="flex items-center gap-3">
              <img className="w-6" src="/assets/newsvgs/call.svg" alt="" />
              <h2 className="text-black font-bold">24 hrs telephone support</h2>
            </div>
          </div>
          <p className="mb-8 max-w-[90%] leading-relaxed">
            I'd be happy to provide you with a free quote! However, I would need
            more information about what you need a quote for. Please provide
            details about the product or service you're interested in, any
            specificrequirements, and any other relevant information, so I can
            assist you in generating an accurate quote.
          </p>

          <div className="flex items-center gap-4">
            <div className="bg-[#00A3F7] p-4">
              <img
                className="w-6 h-6"
                src="/assets/svgs/phone-call (1) 1 (1).svg"
                alt=""
              />
            </div>
            <div className="text-[#00A3F7]">
              <h3 className="text-black text-sm">Call To Ask Any Question</h3>
              <h2>+91 1234567890</h2>
            </div>
          </div>
        </div>
        <div className="bg-[#00A3F7] p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Name"
                autocomplete="false"
                className="w-full px-4 py-3  placeholder:text-gray-800  outline-none "
                name="name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Your Email"
                autocomplete="false"
                className="w-full px-4 py-3  placeholder:text-gray-800  outline-none "
                name="name"
              />
            </div>
            <div className="mb-5">
              <input
                id="service"
                type="text"
                placeholder="Enter Service Name"
                autocomplete="false"
                className="w-full px-4 py-3  placeholder:text-gray-800 outline-none  "
                name="service"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 placeholder:text-gray-800 outline-none  h-36"
                name="message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 font-semibold text-white transition-colors bg-[#061E42] outline-none px-7"
            >
              Request A Quote
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
