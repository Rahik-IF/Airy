"use client";
import React from "react";
import { useGetProductBySlugQuery } from "../../../../../redux/features/productsApi";
import Loading from "@/app/components/Loader";
import ProductsSliderContainer from "@/app/components/sliders/products-page-slider/Main";
import Options from "@/app/components/options/Options";

function ProductBySlug({ params }) {
  const { data: product, error, isLoading } = useGetProductBySlugQuery({
    slug: `${params.slug}`,
  });

  if (isLoading) return <Loading />;
  if (error) return <>Error in data fetching...</>;
  const options = [
    {
      name: "Cleanroom Services",
      link: "/services/cleanroom"
    },
    {
      name: "HVAC Services",
      link: "/services/hvac"
    }
  ]
  return (
    <div className="w-full mx-auto">
      <div className="w-full">
        <ProductsSliderContainer />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-8">
        {/* First Column with flex-1 */}
        <div className="flex-1 px-4 md:px-0">
          <Options options={options} />
        </div>

        {/* Second Column with flex-3 */}
        <div className="flex-grow">
          <div className="w-full flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl 950:text-2xl 1150:text-3xl 1450:text-4xl font-semibold text-gray-900 mb-6">{product.name}</h1>

            <div className="w-full max-w-[500px] mb-6">
              <img
                src={product.photo}
                alt={product.name}
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>

            <div className="w-full max-w-[700px] text-justify">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {!product.body ? product.description : ''}
              </p>

              {product.body && (
                <p
                  className="text-gray-700 text-lg leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.body }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductBySlug;
