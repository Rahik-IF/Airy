"use client";
import { useGetProductsQuery } from '../../../../redux/features/productsApi';
import Loading from '../Loader';
import ProductItem from './ProductItem';
import Modal from './Modal';
import Link from 'next/link';

import CategoryCards from '../category-card/Cards';

const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading products</div>;
  } 

  return (
    <div className="py-10">
      <div className="text-3xl text-gray-800 mb-8 flex justify-between">
        <h2 className="font-bold text-primary">Products</h2>
      </div>
      <div >
         <CategoryCards />
      </div>
      <Modal />
    </div>
  );
};

export default ProductList;
