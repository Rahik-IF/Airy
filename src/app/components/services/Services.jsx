// serviceList.js
"use client"
import Link from 'next/link';
import { useGetEquipmentsQuery } from '../../../../redux/features/productsApi';
import Loading from '../Loader';
import ServiceItem from './ServiceItem';



const ServiceList = () => {
  // Fetch products with RTK Query
  const { data: services, error, isLoading } = useGetEquipmentsQuery();

  if (isLoading) {
      return <Loading />;
  }

  if (error) {
      return <div>Error loading products</div>;
  }
  return (
    <div className="py-10">
      <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
        <h2 className='font-bold'>Services</h2>
        <Link href="/services/cleanroom" className='px-2 bg-[#C8E0CA] text-black text-[12px] 750:text-[14px]'>See All</Link>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            name={service.name}
            description={service.description}
            imageUrl={service.photo}
            category={service.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
