// ProductList.js

import Modal from "./Modal";
import ProductItem from "./ProductItem";




const SearchedProductListPage = ({products, category}) => {
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 750:px-5">
                {products?.map((product, index) => (
                    <ProductItem
                        key={index}
                        name={product.name}
                        description={product.description}
                        imageUrl={product.photo}
                        body={product.body}
                        category={category}
                        slug={product.slug}
                    />
                ))}
            </div>
            <Modal />
        </div>
    );
};

export default SearchedProductListPage;
