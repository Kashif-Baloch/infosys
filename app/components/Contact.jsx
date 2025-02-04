import React from "react";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="w-[90%] mt-14 mx-auto">
      <Heading
        ht={"Contact Us"}
        hft={"If You Have Any Query, Feel"}
        hfb={"Free To Cotact Us"}
      />
      <div className="flex w-[90%] flex-wrap mx-auto items-center justify-between">
        <div className="flex items-center gap-4 mt-5">
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
        <div className="flex items-center gap-4 mt-5">
          <div className="bg-[#00A3F7] p-4">
            <img
              className="w-6 h-6"
              src="/assets/svgs/ic_baseline-mail.svg"
              alt=""
            />
          </div>
          <div className="text-[#00A3F7]">
            <h3 className="text-black text-sm">Email To Get Free Quote</h3>
            <h2>mail@domain.com</h2>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-5">
          <div className="bg-[#00A3F7] p-4">
            <img
              className="w-6 h-6"
              src="/assets/svgs/mdi_location.svg"
              alt=""
            />
          </div>
          <div className="text-[#00A3F7]">
            <h3 className="text-black text-sm">Visit Our Office</h3>
            <h2>123 Street, New York, USA</h2>
          </div>
        </div>
      </div>
      <section className="text-gray-600 container mx-auto body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-[50%] md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <section className="text-gray-600 body-font relative">
              <div>
                <div>
                  <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          placeholder="Name"
                          name="name"
                          className="w-full bg-[#EAF9FF] rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-1/2">
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          className="w-full bg-[#EAF9FF] rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          placeholder="Subject"
                          name="subject"
                          className="w-full bg-[#EAF9FF] rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8"
                        />
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <textarea
                          id="message"
                          placeholder="Message"
                          name="message"
                          className="w-full bg-[#EAF9FF] rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6"
                        ></textarea>
                      </div>
                    </div>
                    <div className="p-2 w-full">
                      <div className="relative">
                        <button
                          type="submit"
                          className="w-full py-4 font-semibold text-white transition-colors bg-[#061E42] outline-none px-7"
                        >
                          Request A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="lg:w-2/3 w-full md:ml-5 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end  flex-row-reverse justify-start relative">
            <div>
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                title="map"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
