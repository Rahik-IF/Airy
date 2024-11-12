// EquipmentList.jsx
import React from 'react';
import EquipmentCard from './Equipment';


const EquipmentList = () => {
  // Sample data; replace this with data from the server in the future.
  const products = [
    { name: 'Cleanroom Door', imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { name: 'Coverall', imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { name: 'Sandwich Panel', imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { name: 'Cleanroom Door', imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { name: 'Coverall', imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' },
    { name: 'Sandwich Panel', imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' },
  ];

  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold pt-8 mb-4">EQUIPMENT</h2>
        <section className="pt-2 pb-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white p-6 pt-1 rounded-lg shadow-lg">
        {products.map((product, index) => (
          <EquipmentCard key={index} name={product.name} imageUrl={product.imageUrl} />
        ))}
      </div>
    </section>
    </>
  );
};

export default EquipmentList;
