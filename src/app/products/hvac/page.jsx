"use client"
import ProductsPage from '@/app/components/products-pages/ProductsPage'
import { useGetProductsByCategoryQuery } from '../../../../redux/features/productsApi';
import Loading from '@/app/components/Loader';

function Hvac() {
  const { data: hvacProduct, error, isLoading } = useGetProductsByCategoryQuery('HVAC');

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  return (
    <div>
        <ProductsPage name="HVAC" products={hvacProduct} />
    </div>
  )
}

export default Hvac;