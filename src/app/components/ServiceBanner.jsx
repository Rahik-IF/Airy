import React from "react";
import bannerImage from "../banner.png"; // Make sure this path is correct based on your project structure
import Image from "next/legacy/image"
const ServiceBannerSection = ({heading}) => {
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
        <div className="absolute top-2 bg-secondary p-1 px-6 550:px-8 700:px-10">
          <h1 className="text-white text-[14px] 550:text-[16px] 700:text-[18px] font-bold">{heading}</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceBannerSection;
