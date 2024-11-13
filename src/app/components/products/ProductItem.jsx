// ProductItem.js
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const ProductItem = ({ name, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-sm overflow-hidden max-w-sm">
      <div className="relative flex justify-center h-48 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
        <h3 className="absolute w-[80%] max-h-[3.5rem] text-ellipsis overflow-hidden line-clamp-2 bottom-[-8%] text-lg text-white font-semibold bg-primary px-4 text-center rounded-sm">
          {name}
        </h3>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <button className="flex w-full items-center justify-center text-white font-semibold hover:underline">
          <div className="bg-primary flex items-center p-2 px-5 rounded-full">
            Explore <FaArrowRight className="ml-2" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
