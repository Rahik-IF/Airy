import Text from '@/app/about/Text';
import ServiceBannerSection from '@/app/components/ServiceBanner';
import React from 'react'
import ServicesFeatures from '../ServicesFeatures';
import EquipmentList from '@/app/components/equipments/EquipmentsList';
import SliderContainer from '@/app/components/slider/Main';
import BlogList from '@/app/components/blogs/Blogs';
import HvacEquipments from "@/database/equipments/equipments-HVAC.json"

function Hvac() {
    const features = [
        {  description: "Lorem ipsum dolor sit amet consectetur. Eu adipiscing" },
        {  description: "Lorem ipsum dolor sit amet consectetur. Eu adipiscing" },
        {  description: "Lorem ipsum dolor sit amet consectetur. Eu adipiscing" },
      ];
  return (
    <div className='flex flex-col items-center px-[2%] 550:px-[3%] 750:px-[15%] 950:px-[18%]'>
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
                <EquipmentList equipments={HvacEquipments}/>                      
            </div>
            <div className='px-8'>
                  <SliderContainer />
                </div>
                <BlogList />
        </div>
  )
}

export default Hvac;