// ProductList.js
import ProductItem from './ProductItem';
import products from "@/database/product-list/products.json"

const ProductList = () => {
    return (
        <div className="py-10">
            <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
                <h2 className='font-bold'>Products</h2>
                <button className='px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]'>See All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 750:px-5">
                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        name={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
