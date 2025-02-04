"use client";
import Hero from "@/app/components/Hero";
import ContactSection from "@/app/sections/ContactSection";
import PricingSection from "@/app/sections/PricingSection";
import SponserSection from "@/app/sections/SponserSection";
import React from "react";

const Prices = () => {
  return (
    <div>
      <Hero bred={"Prices"} />
      <PricingSection />
      <ContactSection />
      <SponserSection />
    </div>
  );
};

export default Prices;
