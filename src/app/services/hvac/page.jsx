"use client"
import Text from '@/app/about/Text';
import ServiceBannerSection from '@/app/components/ServiceBanner';
import React, { useState } from 'react'
import ServicesFeatures from '../ServicesFeatures';
import EquipmentList from '@/app/components/equipments/EquipmentsList';
import SliderContainer from '@/app/components/sliders/slider/Main';
import BlogList from '@/app/components/blogs/Blogs';

import { useGetEquipmentsByCategoryQuery } from '../../../../redux/features/productsApi';
import Loading from '@/app/components/Loader';

function Hvac() {
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10); // Default results per page

  const skip = (page - 1) * resultsPerPage;
  const { data, error, isLoading } = useGetEquipmentsByCategoryQuery({
    category: "HVAC",
    skip,
    take: resultsPerPage,
  });

  if (isLoading) return <Loading />;
  if (error) return <p>Error loading products</p>;
  const { equipments: HvacEquipments, total } = data;
  const totalPages = Math.ceil(Number(total) / resultsPerPage);
  const features = [
    { description: "HVAC SYSTEM CONSULTATION AND DESIGN( PHARMACEUTICALS, HOSPITAL AND FOOD INDUSTRY)" },
    { description: "HVAC EQUIPMENT SUPPLY AND INSTALLATION" },
    { description: "SUPPLY, INSTALLATION OF ALL KINDS OF HVAC EQUIPMENTS" },
    { description: "CONCEPTUAL LAYOUT DESIGN FOR PHARMACEUTICALS INDUSTRY" },
    { description: "HUMIDITY CONTROL AND LOW HUMIDITY CONTROL ROOM DESIGN" },
    { description: "GMP COMPLIANCE CLEAN ROOM & HVAC SYSTEM" },
    { description: "AIR FILTRATION SYSTEM" },
    { description: "AIR FILTRATION SYSTEM" },
    { description: "AIR VENTILATION SYSTEM" },
  ];
  return (
    <div className='flex flex-col container items-center px-[2%] 550:px-[3%] 750:px-[15%] 950:px-[18%]'>
      <ServiceBannerSection heading="HVAC" />
      <div>
        <Text
          text="You count on your HVAC system to always keep your home comfortable, so you want to ensure it continues to work at its best. With heating, ventilation and air conditioning (HVAC) service, you can keep everything running smoothly and efficiently. If you're wondering what HVAC service includes, our guide will help you understand the care your system gets and when you need it."
        />
        <Text
          header="WHAT IS HVAC SERVICE?"
          text="HVAC service involves installing, maintaining or repairing an HVAC system. Getting an HVAC service is like having a checkup-a professional looks at your system to see if there are any issues. They'll perform a thorough inspection, and if they find anything wrong, they'll repair it or schedule a follow-up appointment to address the issue. Different companies have different service offerings, so talk to your HVAC company to find out precisely what their HVAC service includes."
        />
        <Text
          header="WHAT HAPPENS DURING AN HVAC SERVICE VISIT?"
          text="HVAC service includes a range of inspections. Your HVAC professional will take time to ensure your whole system works effectively, as one part being broken or worn reduces the entire system's efficiency. Investing in regular HVAC service will help you spot and correct weak points, saving you money in the long term and boosting your HVAC efficiency. An HVAC service will typically involve the technician checking your air conditioner, heating equipment and ductwork."
        />
        <ServicesFeatures title="OUR HVAC SERVICES" features={features} />
        {/* <EquipmentList
          setResultsPerPage={setResultsPerPage}
          equipments={HvacEquipments}
          page={page}
          setPage={setPage}
          total={total}
          resultsPerPage={resultsPerPage}
          totalPages={totalPages}
        /> */}

      </div>
      <div className='px-8'>
        <SliderContainer
          name="HVAC"
        />
      </div>
      <BlogList />
    </div>
  )
}

export default Hvac;