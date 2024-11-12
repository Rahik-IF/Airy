import ProductsPage from '@/app/components/products-pages/ProductsPage'
import cleanroomProducts from "@/database/products-by-categories/products-Cleanroom.json"

function Cleanroom() {
  return (
    <div>
        <ProductsPage name="CLEANROOM" products={cleanroomProducts} />
    </div>
  )
}

export default Cleanroom