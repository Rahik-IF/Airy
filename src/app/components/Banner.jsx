import React from "react";
import bannerImage from "../banner.png"; // Make sure this path is correct based on your project structure
import Image from "next/legacy/image"
const BannerSection = () => {
  return (
    <div className="pt-1">
      {/* Banner Image */}
      <div className="relative w-full h-full">
        <Image
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay (optional) */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Welcome to Airy</h1>
        </div>
      </div>

      {/* Informational Section */}
      <div className="bg-primary-light text-white py-12 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. 
            Pretium lectus ut lectus hendrerit tellus tellus amet. Eleifend mauris tortor pellentesque quisque risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
