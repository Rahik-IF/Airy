import React from 'react'
import BannerSection from '../components/Banner'
import Text from './Text'
import BlogList from '../components/blogs/Blogs'



function page() {
   return (
      <div className='flex flex-col w-full container mx-auto 450:px-4 750:px-6 1000:px-28'>
         <BannerSection />
         <div className='p-4 550:p-6 '>
            <Text
               header="Our Vision"
               text="To be the global benchmark for precision-engineered HVAC systems and Cleanroom products, fostering innovation and environmental stewardship."
            />
            <Text
               header="Our Mission"
               text="To revolutionize controlled environments by providing innovative, efficient, and sustainable HVAC and Cleanroom solutions that ensure operational excellence and compliance."
            />
            <Text
               header="Our Offerings"
               text="HVAC Products: Air-cooled chillers, water-cooled chillers, DX package units, air handling units, fan coil units, portable and desiccant dehumidifiers."
            />
            <Text
               text="Cleanroom Products: Sandwich panels, doors, windows, pass boxes, laminar airflows, dispensing booths, sampling booths, air showers, cleanroom coveralls, and clean benches."
            />

            <Text
               text="Air Filtration Solutions: Pre-filters, medium filters, HEPA filters, and cartridge filters."
            />

            <Text

               text="At Cleanroom Air Condition LLC, we are dedicated to transforming spaces with cutting-edge technology, quality craftsmanship, and a customer-centric approach."
            />


            {/* <ChooseText />  */}
            <BlogList />
         </div>
         <div className='flex w-full justify-center'>

         </div>

      </div>
   )
}

export default page