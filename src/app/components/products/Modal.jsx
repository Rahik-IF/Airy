import { useSelector, useDispatch } from 'react-redux';
import { closeProductModal } from '../../../../redux/features/modals/modalsSlice';


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
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
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
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
