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

  const { data, error, isLoading } =
    useGetProductsByCategoryQuery({
      category: "air-filtering",
      skip,
      take: resultsPerPage,
    });
   
  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;

  const {products:filteringProduct, total} = data;
  const totalPages = Math.ceil(Number(total) / resultsPerPage);
  return (
    <div>
      <ProductsPage
        page={page}
        name="AIR-FILTRATION"
        products={filteringProduct}
        setPage={setPage}
        setResultsPerPage={setResultsPerPage}
        totalPages={totalPages}
        total={total}
        resultsPerPage={resultsPerPage}
      />
    </div>
  );
}

export default AirFiltering;
