import React from 'react'
import BannerSection from '../components/Banner'
import Text from './Text'
import BlogList from '../components/blogs/Blogs'
import ChooseText from './Choose'


function page() {
  return (
    <div className='flex flex-col w-full container mx-auto 450:px-4 750:px-6 1000:px-28'>
        <BannerSection />
        <div className='p-4 550:p-6 '>      
         <Text 
            header="Our Vision"
            text="Delivering next-generation HVAC and Cleanroom solutions with precision, sustainability, and reliability, ensuring optimal environments for critical industries"
         />
         {/* <Text 
            header="Our Mission"
            text="Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. 
            Pretium lectus ut lectus hendrerit tellus tellus amet. Eleifend mauris tortor pellentesque quisque risus."
         />
         <Text 
            header="Our Experties"
            text="Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. 
            Pretium lectus ut lectus hendrerit tellus tellus amet. Eleifend mauris tortor pellentesque quisque risus."
         />
         <ChooseText /> */}
         <BlogList />
        </div>
        <div className='flex w-full justify-center'>
        
        </div>
        
    </div>
  )
}

export default page