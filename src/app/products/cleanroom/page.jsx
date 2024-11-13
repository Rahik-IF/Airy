"use client"
import ProductsPage from '@/app/components/products-pages/ProductsPage'
import { useGetProductsByCategoryQuery } from '../../../../redux/features/productsApi';
import Loading from '@/app/components/Loader';

function Cleanroom() {
  const { data: cleanroomProducts, error, isLoading } = useGetProductsByCategoryQuery('CLEANROOM');

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  return (
    <div>
        <ProductsPage name="CLEANROOM" products={cleanroomProducts} />
    </div>
  )
}

export default Cleanroom