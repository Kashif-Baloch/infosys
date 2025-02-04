"use client";
import BlogsCards from "@/app/components/BlogsCards";
import Hero from "@/app/components/Hero";
import SponserSection from "@/app/sections/SponserSection";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <Hero bred={"Blogs"} />
      <BlogsCards />
      <SponserSection />
    </div>
  );
};

export default Blogs;
