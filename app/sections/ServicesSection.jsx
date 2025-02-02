import React from "react";
import Heading from "../components/Heading";

const ServicesSection = () => {
  const services = [
    {
      image: "/assets/newsvgs/cyber_security.svg",
      title: "Cyber Security",
      description: `Cybersecurity refers to the practice of protecting computer
              systems, networks, and digital data from theft, damage, or
              unauthorized access.`,
    },
    {
      image: "/assets/svgs/cyber_security.svg",
      title: "Data Analytics",
      description: `Data analytics is the process of examining, cleaning.
              transforming, and interpreting data to discover meaningful
              insights, patterns, and trends.`,
    },
    {
      image: "/assets/svgs/cyber_security (1).svg",
      title: "Web Development",
      description: `Web development is the process of creating and maintaining websites or web applications for the internet. It involves a combination of skills and technologies to design, build, and manage websites.`,
    },
    {
      image: "/assets/newsvgs/cyber_security.svg",
      title: "App Development",
      description: `App development refers to the process of creating software applications, often designed to run on mobile devices like smartphones and tablets, but it can also refer to applications for desktop computers or web-based platforms.`,
    },
    {
      image: "/assets/svgs/cyber_security.svg",
      title: "SEO Optimization",
      description: `SEO (Search Engine Optimization) is the process of improving the visibility and ranking of a website or web page in search engine results. This is done to increase organic (non-paid) traffic to a website.`,
    },
  ];

  return (
    <div className="w-[90%] mt-24 mx-auto">
      <div className="container mx-auto">
        <Heading
          ht={"OUR SERVICES"}
          hft={"Custom IT Solution For Your"}
          hfb={"Successfully Business"}
        />
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
          {services.map((elem, index) => {
            return (
              <div
                key={index}
                className="bg-[#EAF9FF] rounded-lg text-center flex flex-col justify-center items-center p-6 gap-y-3 "
              >
                <img src={elem.image} className="w-20" alt="" />
                <h2 className="text-xl  font-semibold text-black dark:text-white mb-2">
                  {elem.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {elem.description}
                </p>
              </div>
            );
          })}

          <div className="bg-[#00A3F7] text-center flex flex-col justify-center items-center p-6 gap-y-3 ">
            <h2 className="text-2xl text-white font-semibold mb-2">
              Call Us For Quote
            </h2>
            <p className="text-white">
              I'm just a text-based Al and I'm unable to make phone calls.
              However, if you're looking to request a quote from a specific
              business or service, you should find their contact information on
              their website or in any materials they've provided.
            </p>
            <h2 className="text-2xl text-white font-semibold mb-2">
              +91 1234567890
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
