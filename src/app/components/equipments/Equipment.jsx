// ProductCard.jsx

const EquipmentCard = ({ name, imageUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white transform hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="bg-blue-900 text-white text-center py-2">
        <p className="font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default EquipmentCard;
