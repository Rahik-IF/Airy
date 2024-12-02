"use client"
import ProductsPage from '@/app/components/products-pages/ProductsPage'
import { useGetProductsByCategoryQuery } from '../../../../redux/features/productsApi';
import Loading from '@/app/components/Loader';
import { useState } from 'react';

function Cleanroom() {
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default results per page

  const skip = (page - 1) * resultsPerPage;

  const { data: filteringProduct, error, isLoading } =
    useGetProductsByCategoryQuery({
      category: "CLEANROOM",
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
        name="CLEANROOM"
        products={filteringProduct}
        setPage={setPage}
        setResultsPerPage={setResultsPerPage}
        totalPages={totalPages}
        resultsPerPage={resultsPerPage}
      />
    </div>
  );
}

export default Cleanroom