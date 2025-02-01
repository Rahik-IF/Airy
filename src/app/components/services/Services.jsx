// serviceList.js

import Heading from '../Heading';
import ServiceCategoryCards from '../service-category-card/Cards';

const ServiceList = () => {
 
  return (
    <div className="py-10">
      <div className="text-3xl text-gray-800 mb-8 flex justify-between">
        <Heading>Services</Heading>
      </div>
      <div >
         <ServiceCategoryCards />
      </div>
    </div>
  );
};

export default ServiceList;
