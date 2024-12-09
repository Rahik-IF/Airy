import { useSelector, useDispatch } from 'react-redux';
import { closeProductModal } from '../../../../redux/features/modals/modalsSlice';
import "../products/Modal.module.css"
import Link from 'next/link';

const Modal = () => {
  const { isProductOpen, product } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  if (!isProductOpen || !product) return null;

  const handleClose = () => {
    dispatch(closeProductModal());
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[80vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          ✕
        </button>
        <div className="text-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600 mt-2 text-justify">{product.description}</p>
          <Link 
            href={`/products/${product.category.toLowerCase()}/${product.slug}`}
            className="px-2 py-1 bg-primary text-white mt-2 rounded-md">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
