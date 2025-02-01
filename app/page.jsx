import AboutSection from "./sections/AboutSection";
import BlogsSection from "./sections/BlogsSection";
import ChooseusSection from "./sections/ChooseusSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PricingSection from "./sections/PricingSection";
import ServicesSection from "./sections/ServicesSection";
import SponserSection from "./sections/SponserSection";
import TeamSection from "./sections/TeamSection";
import TestimonialSection from "./sections/TestimonialSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ChooseusSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      <TestimonialSection />
      <TeamSection />
      <BlogsSection />
      <SponserSection />
    </div>
  );
};

export default Home;
