"use client";
import React from "react";
import { useGetProductBySlugQuery } from "../../../../../redux/features/productsApi";
import Loading from "@/app/components/Loader";

function ProductBySlug({ params }) {
  const { data: product, error, isLoading } = useGetProductBySlugQuery({
    slug: `${params.slug}`,
  });

  if (isLoading) return <Loading />;
  if (error) return <>Error in data fetching...</>;

  return (
    <div className="p-6 sm:p-10 max-w-5xl mx-auto">
      {/* Product Image */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={product.photo}
            alt={product.name}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            {product.name}
          </h1>
          {!product.body && <p
            className="text-gray-600 text-lg leading-relaxed"           
          >{product.description}</p>}
          <p
            className="text-gray-600 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: product.body }}
          ></p>
          
        </div>
      </div>
    </div>
  );
}

export default ProductBySlug;
