"use client"
import ProductsPage from "@/app/components/products-pages/ProductsPage";
import { useGetProductsByCategoryQuery } from "../../../../redux/features/productsApi";
import Loading from "@/app/components/Loader";


function AirFiltering() {
  const { data: filteringProduct, error, isLoading } = useGetProductsByCategoryQuery('AIR FILTERING');

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <ProductsPage name="AIR FILTERING" products={filteringProduct} />
    </div>
  )
}

export default AirFiltering