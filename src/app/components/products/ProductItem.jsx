// ProductItem.js
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const ProductItem = ({ name, category, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden max-w-xs">
      <div className="relative flex justify-center h-48 w-full">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-sm" />
        <h3 className="absolute bottom-[-8%] text-xl text-white font-[500] bg-primary px-4">{name}</h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="flex w-full items-center  justify-center text-white font-semibold hover:underline">
         <div className='bg-primary flex items-center p-2 px-5 rounded-[30px]'>
         Explore <FaArrowRight className="ml-2" />
         </div>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
