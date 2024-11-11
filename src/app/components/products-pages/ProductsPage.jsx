import React from 'react'
import ProductListPage from './Products';
import BlogList from '../blogs/Blogs';

function ProductsPage({name,products}) {
  return (
    <div className='flex flex-col items-center py-5 px-4'>
        <h2 className='px-3 py-1 my-2 660:px-4 880:px-6 660:text-[24px] text-white font-bold bg-secondary'>
            {name}
        </h2>
        <div className='shadow-diligent p-3 bg-white rounded-lg my-4'>
          <ProductListPage products={products} />
        </div>
        <div className=''>
          <BlogList />
        </div>
    </div>
  )
}

export default ProductsPage;