// ProductList.js
"use client"
import { useGetProductsQuery } from '../../../../redux/features/productsApi';
import Loading from '../Loader';
import ProductItem from './ProductItem';


const ProductList = () => {
    // Fetch products with RTK Query
    const { data: products, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error loading products</div>;
    }
    return (
        <div className="py-10">
            <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
                <h2 className='font-bold'>Products</h2>
                <button className='px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]'>See All</button>
            </div>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        name={product.name}
                        description={product.description}
                        imageUrl={product.photo}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
