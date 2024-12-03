"use client"
import React from 'react';
import CarouselSlider from './Slider';
import { useGetProductsByCategoryQuery } from '../../../../redux/features/productsApi';
import Loading from '../Loader';

const SliderContainer = ({ name }) => {
  const { data, error, isLoading } = useGetProductsByCategoryQuery({
    category: `${name}`,
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

  return (
    <div className="px-8">
      <h1 className="text-3xl font-bold text-center my-8">Our Products</h1>
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

export default SliderContainer;
