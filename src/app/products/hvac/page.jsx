import ProductsPage from '@/app/components/products-pages/ProductsPage'

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
function Hvac() {
  return (
    <div>
        <ProductsPage name="HVAC" products={products} />
    </div>
  )
}

export default Hvac;