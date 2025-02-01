"use client";
import { useGetProductsQuery } from '../../../../redux/features/productsApi';
import Loading from '../Loader';
import ProductItem from './ProductItem';
import Modal from './Modal';
import Link from 'next/link';

import CategoryCards from '../category-card/Cards';
import Heading from '../Heading';

const ProductList = () => {
  return (
    <div className="py-10">
      <div className="text-3xl text-gray-800 mb-8 flex justify-between">
        <Heading>Products</Heading>
      </div>
      <div className='w-full flex justify-center'>
         <CategoryCards />
      </div>
      <Modal />
    </div>
  );
};

export default ProductList;
