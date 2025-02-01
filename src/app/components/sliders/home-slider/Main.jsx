"use client"
import React from 'react';
import CarouselSlider from './Slider';
import { useGetProductsQuery } from '../../../../../redux/features/productsApi';
import Loading from '../../Loader';
/* import cleanroom from "/cleanroom-sl.png" */

const HomeSliderContainer = () => {
  const { data: filteringProduct, error, isLoading } = useGetProductsQuery();
  const sliderProducts = [
    {
      imageUrl: "/cleanroom-sl-1.svg",
      href: `/products/cleanroom`,
      caption: "Cleanroom"
    },
    {
      imageUrl: "/hvac-sl-1.svg",
      href: `/products/hvac`,
      caption: "HVAC"
    },
    {
      imageUrl: "/air-sl-1.svg",
      href: `/products/air-filtering`,
      caption: "Air Filtration"
    }
  ]
  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  console.log(filteringProduct);
  // Map over the first 3 items in filteringProduct to generate slides
  const slides = filteringProduct
    ? filteringProduct.slice(0, 3).map((product, index) => ({
      imageUrl: product.photo,
      href: `/products/cleanroom`, // Assuming each product has a unique ID
      caption: `${product.name}`,
    }))
    : []; // Empty array if no products are available

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products.</p>}
      {filteringProduct && filteringProduct.length > 0 ? (
        <CarouselSlider slides={sliderProducts} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default HomeSliderContainer;
