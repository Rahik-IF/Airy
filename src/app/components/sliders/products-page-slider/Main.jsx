"use client"
import React from 'react';
import CarouselSlider from './Slider';
import Loading from '../../Loader';
import { useGetProductsByCategoryQuery } from '../../../../../redux/features/productsApi';
const slides1 = [
  {
    imageUrl: "/cleanroom-sl-1.svg",
    href: `/products/cleanroom`,
    caption: ``,
  },
  {
    imageUrl: "/cleanroom-sl-2.svg",
    href: `/products/cleanroom`,
    caption: ``,
  },
  {
    imageUrl: "/cleanroom-sl-3.svg",
    href: `/products/cleanroom`,
    caption: ``,
  }
]
const slides2 = [
  {
    imageUrl: "/hvac-sl-1.svg",
    href: `/products/hvac`,
    caption: ``,
  },
  {
    imageUrl: "/hvac-sl-2.svg",
    href: `/products/hvac`,
    caption: ``,
  },
  {
    imageUrl: "/hvac-sl-3.svg",
    href: `/products/hvac`,
    caption: ``,
  }
]
const slides3 = [
  {
    imageUrl: "/air-sl-1.svg",
    href: `/products/hvac`,
    caption: ``,
  },
  {
    imageUrl: "/air-sl-2.svg",
    href: `/products/hvac`,
    caption: ``,
  },
  {
    imageUrl: "/air-sl-3.svg",
    href: `/products/hvac`,
    caption: ``,
  }
]
const ProductsSliderContainer = ({ name }) => {
  const { data, error, isLoading } = useGetProductsByCategoryQuery({
    category: `cleanroom`,
  });
  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  console.log(data);
  const { products: filteringProduct, total } = data;
  // Map over the first 3 items in filteringProduct to generate slides
  let slides =[];
  if(name === "CLEANROOM"){
   slides = slides1;
  }else if (name === "AIR-FILTERING"){
   slides = slides3
  }else{
   slides = slides2
  }


  return (
    <div className="w-screen mx-auto">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products.</p>}
      {filteringProduct && filteringProduct.length > 0 ? (
        <CarouselSlider slides={slides} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductsSliderContainer;
