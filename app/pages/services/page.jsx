import Hero from "@/app/components/Hero";
import ServicesSection from "@/app/sections/ServicesSection";
import SponserSection from "@/app/sections/SponserSection";
import TestimonialSection from "@/app/sections/TestimonialSection";

const Services = () => {
  return (
    <div>
      <Hero bred={"Services"} />
      <ServicesSection />
      <TestimonialSection />
      <SponserSection />
    </div>
  );
};

export default Services;
