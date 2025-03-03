"use client";
import React from "react";
import CarouselSlider from "./Slider";
import Loading from "../../Loader";
import { useGetBannersQuery } from "../../../../../redux/features/productsApi";

const ProductsSliderContainer = ({ name }) => {
  const { data: banners, error, isLoading } = useGetBannersQuery({ page: name.toLowerCase() });

  if (isLoading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Error loading banners</p>;
console.log(banners);
  // Map API response to CarouselSlider structure
  const slides =
    banners?.map((banner) => ({
      imageUrl: banner.image,
      href: banner.link,
      caption: `Banner ${banner.id}`, // Optional caption
    })) || [];
 console.log(slides);
  return (
    <div className="w-full mx-auto">
      {slides.length > 0 ? (
        <CarouselSlider slides={slides} />
      ) : (
        <p className="text-center text-gray-500">No banners found.</p>
      )}
    </div>
  );
};

export default ProductsSliderContainer;
