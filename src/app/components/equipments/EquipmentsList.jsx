// EquipmentList.jsx
import React from 'react';
import EquipmentCard from './Equipment';


const EquipmentList = ({equipments}) => {

  return (
    <>
      <h2 className="text-2xl sm:text-3xl font-bold pt-8 mb-4">EQUIPMENT</h2>
        <section className="pt-2 pb-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white p-6 pt-1 rounded-lg shadow-lg">
        {equipments.map((product, index) => (
          <EquipmentCard key={index} name={product.name} imageUrl={product.photo} />
        ))}
      </div>
    </section>
    </>
  );
};

export default EquipmentList;
