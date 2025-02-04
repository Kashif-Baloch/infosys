"use client";
import Contact from "@/app/components/Contact";
import Hero from "@/app/components/Hero";
import SponserSection from "@/app/sections/SponserSection";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <Hero bred={"Contact"} />
      <Contact />
      <SponserSection />
    </div>
  );
};

export default ContactUs;
