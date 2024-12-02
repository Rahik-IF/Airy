"use client";
import React, { useState } from "react";
import ProductsPage from "@/app/components/products-pages/ProductsPage";
import Pagination from "@/app/components/Pagination";
import { useGetProductsByCategoryQuery } from "../../../../redux/features/productsApi";
import Loading from "@/app/components/Loader";

function AirFiltering() {
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default results per page

  const skip = (page - 1) * resultsPerPage;

  const { data: filteringProduct, error, isLoading } =
    useGetProductsByCategoryQuery({
      category: "AIR FILTERING",
      skip,
      take: resultsPerPage,
    });

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;

  const totalPages = Math.ceil(100 / resultsPerPage); // Adjust based on your total items

  return (
    <div>
      <ProductsPage
        page={page}
        name="AIR FILTERING"
        products={filteringProduct}
        setPage={setPage}
        setResultsPerPage={setResultsPerPage}
        totalPages={totalPages}
        resultsPerPage={resultsPerPage}
      />
    </div>
  );
}

export default AirFiltering;
