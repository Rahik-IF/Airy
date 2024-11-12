import ProductsPage from '@/app/components/products-pages/ProductsPage'
import filteringProduct from "@/database/products-by-categories/products-Air-filtering.json"

function AirFiltering() {
  return (
    <div>
        <ProductsPage name="AIR FILTERING" products={filteringProduct} />
    </div>
  )
}

export default AirFiltering