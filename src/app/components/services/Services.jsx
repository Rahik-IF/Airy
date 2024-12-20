// serviceList.js
"use client"
import Link from 'next/link';
import { useGetEquipmentsQuery } from '../../../../redux/features/productsApi';
import Loading from '../Loader';
import ServiceItem from './ServiceItem';
import ServiceCategoryCards from '../service-category-card/Cards';



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
      <div className="text-3xl text-gray-800 mb-8 flex justify-between">
        <h2 className="font-bold text-primary">Services</h2>
      </div>
      <div >
         <ServiceCategoryCards />
      </div>
    </div>
  );
};

export default ServiceList;
