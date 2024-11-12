
"use client"
import React from 'react';
import CarouselSlider from './Slider';


const SliderContainer = () => {
  const slides = [
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', href: '/products/cleanroom', caption: 'CLEANROOM' },
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', href: '/products/hvac', caption: 'HVAC' },
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1730988915408-209c1ab59554?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', href: '/products/air-filtering', caption: 'AIR FILTERING' },
    // Add more slides as needed
  ];
 

  return (
    <div className='px-8'>
      <h1 className="text-3xl font-bold text-center my-8">Our Products</h1>
      <CarouselSlider slides={slides} />
    </div>
  );
};

export default SliderContainer;
