import ProductsPage from '@/app/components/products-pages/ProductsPage'
import hvacProduct from "@/database/products-by-categories/products-HVAC.json"

function Hvac() {
  return (
    <div>
        <ProductsPage name="HVAC" products={hvacProduct} />
    </div>
  )
}

export default Hvac;