"use client";
import React from "react";
import CarouselSlider from "./Slider";
import Loading from "../../Loader";
import { useGetBannersQuery } from "../../../../../redux/features/productsApi";

const HomeSliderContainer = () => {
  const page = "home"; 
  const { data: banners, error, isLoading } = useGetBannersQuery({ page });

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500">Error loading banners</p>;

  // Map banners data to match slider format
  const slides = banners
    ? banners.map((banner) => ({
        imageUrl: banner.image,
        href: banner.link,
        caption: `Banner ${banner.id}`, // Optional caption
      }))
    : [];

  return (
    <div>
      {banners && banners.length > 0 ? (
        <CarouselSlider slides={slides} />
      ) : (
        <p className="text-center text-gray-500">No banners found.</p>
      )}
    </div>
  );
};

export default HomeSliderContainer;
