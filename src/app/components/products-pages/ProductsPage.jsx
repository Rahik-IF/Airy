import React from 'react'
import ProductListPage from './Products';
import BlogList from '../blogs/Blogs';
import Pagination from '../Pagination';
import Options from '../options/Options';
import ProductsSliderContainer from '../sliders/products-page-slider/Main';

function ProductsPage({ name, products, page, setPage, total, setResultsPerPage, totalPages, resultsPerPage }) {
  const options = [
    {
      name: "Cleanroom Services",
      link: "/services/cleanroom"
    },
    {
      name: "HVAC Services",
      link: "/services/hvac"
    }
  ]
  return (
    <div className="flex flex-col items-center py-5">

      <h2 className="px-3 py-1 6 my-2 660:px-4 880:px-6 660:text-[24px] text-white font-bold bg-primary">
        {name === "AIR-FILTERING" ? "AIR-FILTRATION" : name}
      </h2>
      <div className='h-full w-full'>
        <ProductsSliderContainer name={name}/>
      </div>
      <div className="p-3 my-4 flex-col md:flex-row flex">
        <div className="flex-1">
          <Options options={options} />
        </div>
        <div className="flex-3">
          <ProductListPage products={products} category={name} />
        </div>
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
        resultsPerPage={resultsPerPage}
        total={total}
        onResultsPerPageChange={(newResults) => {
          setResultsPerPage(newResults);
          setPage(1);
        }} />
      <div className='container'>
        <BlogList />
      </div>
    </div>
  );
}

export default ProductsPage;
