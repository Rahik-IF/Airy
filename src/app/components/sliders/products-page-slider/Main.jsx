"use client"
import React from 'react';
import CarouselSlider from './Slider';
import Loading from '../../Loader';
import { useGetProductsByCategoryQuery } from '../../../../../redux/features/productsApi';

const ProductsSliderContainer = ({ name = "cleanroom" }) => {
  const { data, error, isLoading } = useGetProductsByCategoryQuery({
    category: `cleanroom`,
  });
  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  console.log(data);
  const { products: filteringProduct, total } = data;
  // Map over the first 3 items in filteringProduct to generate slides
  const slides = filteringProduct
    ? filteringProduct.slice(0, 3).map((product, index) => ({
      imageUrl: product.photo,
      href: `/products/${name.toLowerCase()}`, // Assuming each product has a unique ID
      caption: `${name} ${index + 1}`,
    }))
    : []; // Empty array if no products are available
  const slides2 = [
    {
      imageUrl: "/product-slide-1.png",
      href: `/products/cleanroom`,
      caption: ``,
    },
    {
      imageUrl: "/product-slide-2.jpg",
      href: `/products/cleanroom`,
      caption: ``,
    },
    {
      imageUrl: "/product-slide-3.png",
      href: `/products/cleanroom`,
      caption: ``,
    },
    {
      imageUrl: "/product-slide-4.jpg",
      href: `/products/cleanroom`,
      caption: ``,
    }
  ]

  return (
    <div className="w-screen mx-auto">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products.</p>}
      {filteringProduct && filteringProduct.length > 0 ? (
        <CarouselSlider slides={slides2} />
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductsSliderContainer;
