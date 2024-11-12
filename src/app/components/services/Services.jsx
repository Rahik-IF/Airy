// serviceList.js
import ServiceItem from './ServiceItem';
import services from "@/database/services/services.json"


const ServiceList = () => {
  return (
    <div className="py-10">
      <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
        <h2 className='font-bold'>services</h2>
        <button className='px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]'>See All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            name={service.name}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
