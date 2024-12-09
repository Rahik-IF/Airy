import React from "react";
import bannerImage from "../banner.png"; // Make sure this path is correct based on your project structure
import Image from "next/legacy/image"
import HomeSliderContainer from "./home-slider/Main";
const BannerSection = () => {
  return (
    <div className="pt-1">
      {/* Banner Image */}
      <div className="relative w-full h-full">
       <HomeSliderContainer />     
      </div>

      {/* Informational Section */}
      <div className="bg-primary-light text-white py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ABOUT COMPANY</h2>
          <p className="text-sm 660:text-lg text-justify 1000:text-xl">
            Founded in 2005, Airy International is a specialized engineering company with a focus on pharmaceutical equipment and HVAC systems, drawing on over 25 years of industry expertise. From the outset, our mission has been to deliver the highest standards of customer service and technical solutions, particularly in the pharmaceutical, hospital, and food industries.<br/>

            Over the years, we have earned a trusted reputation, often being sought after for technical advice and consultancy by leading pharmaceutical companies and healthcare facilities. By investing in cutting-edge technology and employing highly skilled professionals, Airy International has built an enviable track record for delivering quality and innovation.<br/>

            Our success is grounded in the trust and loyalty of our clients, who rely on us for high-quality equipment and services at competitive prices. We are committed to fostering strong, long-term relationships with all our clients, ensuring that their unique needs are met with tailored solutions. At Airy, we understand that one size does not fit all, and our close partnerships with clients enable us to provide customized solutions that best serve their objectives.<br/>

            As a dedicated and professional company, we are always open to collaboration with our valued clients, and we remain committed to delivering exceptional service and maintaining strong relationships. We invite your continued support in upholding our service standards and commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
