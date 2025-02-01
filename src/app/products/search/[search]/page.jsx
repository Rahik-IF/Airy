"use client";
import React, { useState } from "react";
import { useGetProductBySearchQuery } from "../../../../../redux/features/productsApi";
import Loading from "@/app/components/Loader";
import SearchedProductsPage from "@/app/components/products-pages/SearchedProductsPage";
import { useParams } from "next/navigation";

function AirFiltering() {
  const {search} = useParams();
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default results per page

  const skip = (page - 1) * resultsPerPage;
  console.log(search);
  const { data, error, isLoading } =
  useGetProductBySearchQuery(
    {
      search: search,
      skip,
      take: resultsPerPage,
    },
    { skip: !search }
  );
  
 
  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;

  const {products:filteringProduct, total} = data;
  const totalPages = Math.ceil(Number(total) / resultsPerPage);

  return (
    <div>
      <SearchedProductsPage
        page={page}
        name="AIR-FILTERING"
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
