"use client";
import React from "react";
import { useGetPicturesQuery } from "../../../redux/features/galleryApi";
import Loading from "../components/Loader";
import Link from "next/link";

const Gallery = () => {
  const { data, isLoading, error } = useGetPicturesQuery(); 
  if (isLoading) return <Loading />;
  if (error) return <p className="text-center text-red-600">Error loading pictures.</p>;
  console.log(data);
  const {products: pictures} = data;
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pictures?.map((picture) => (
            <Link
              href={`products/${picture?.category?.slug}/${picture.slug}`}
              key={picture.slug}
              className="relative overflow-hidden rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={picture.photo}
                alt={picture.name}
                className="w-full h-56 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{picture.name}</h3>
                <p className="text-sm text-gray-600">{picture.category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
