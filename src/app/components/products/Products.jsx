// ProductList.js
import ProductItem from './ProductItem';

const products = [
    {
        name: 'Cleanroom Window',
        category: 'Cleanroom',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet vel purus ac imperdiet.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    },
    {
        name: 'HVAC Item',
        category: 'HVAC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet vel purus ac imperdiet.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    },
    {
        name: 'Filtering Item',
        category: 'Air Filter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet vel purus ac imperdiet.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    },
    // Add more items as needed
];

const ProductList = () => {
    return (
        <div className="py-10">
            <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
                <h2 className='font-bold'>Products</h2>
                <button className='px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]'>See All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 750:px-5">
                {products.map((product, index) => (
                    <ProductItem
                        key={index}
                        name={product.name}
                        category={product.category}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;