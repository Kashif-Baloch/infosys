"use client";
import Hero from "@/app/components/Hero";
import AboutSection from "@/app/sections/AboutSection";
import SponserSection from "@/app/sections/SponserSection";
import TeamSection from "@/app/sections/TeamSection";

const About = () => {
  return (
    <div>
      <Hero bred={"About Us"} />
      <AboutSection />
      <TeamSection />
      <SponserSection />
    </div>
  );
};

export default About;
