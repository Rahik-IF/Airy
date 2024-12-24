import React from "react";
import bannerImage from "../banner.png"; // Make sure this path is correct based on your project structure
import Image from "next/legacy/image"
import HomeSliderContainer from "./sliders/home-slider/Main";
import Container from "./Container";
const BannerSection = () => {
  return (
    <div className="">
      {/* Banner Image */}
      <div className="relative w-full h-full">
        <HomeSliderContainer />
      </div>

      {/* Informational Section */}
      <Container>
        <div className="bg-secondary opacity-90 text-white py-12 px-4 md:px-16">

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT COMPANY</h2>
            <p className="text-sm 660:text-lg text-justify 1000:text-xl">
            Cleanroom Air Condition LLC is a trusted leader in providing turnkey HVAC systems and Cleanroom solutions, offering state-of-the-art products and services tailored to meet the highest industry standards. We specialize in designing and delivering comprehensive environmental solutions for pharmaceuticals, healthcare, and food sectors.
            </p>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
