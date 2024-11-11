import React from 'react'
import BannerSection from '../components/Banner'
import Text from './Text'
import BlogList from '../components/blogs/Blogs'


function page() {
  return (
    <div className='flex flex-col items-stretch 450:px-4 750:px-6 1000:px-28'>
        <BannerSection />
        <div className='p-4 550:p-6 '>      
         <Text 
            header="Our Vision"
            text="Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. 
            Pretium lectus ut lectus hendrerit tellus tellus amet. Eleifend mauris tortor pellentesque quisque risus."
         />
         <Text 
            header="Our Mission"
            text="Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. 
            Pretium lectus ut lectus hendrerit tellus tellus amet. Eleifend mauris tortor pellentesque quisque risus."
         />
         <Text 
            header="Our Experties"
            text="Lorem ipsum dolor sit amet consectetur. Eu adipiscing vulputate morbi vel vitae faucibus purus felis suspendisse. 
            Pretium lectus ut lectus hendrerit tellus tellus amet. Eleifend mauris tortor pellentesque quisque risus."
         />
         <BlogList />
        </div>
        <div className='flex w-full justify-center'>

        
        </div>
        
    </div>
  )
}

export default page