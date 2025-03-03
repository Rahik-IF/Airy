// CarouselSlider.jsx
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const CarouselSlider = ({ slides }) => {
  alert(slides[0].imageUrl);
  return (
    <section className="mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },  // 1 slide on small screens
          768: { slidesPerView: 1 },  // 2 slides on medium screens
          1024: { slidesPerView: 1 }, // 3 slides on large screens
          1280: { slidesPerView: 1 }, // 4 slides on extra-large screens
        }}
        className="overflow-hidden mb-2"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative group w-full">
            <a href={slide.href} target="_blank" rel="noopener noreferrer">
              <div className='relative w-full h-64 600:h-72 770:h-80 1150:h-96 1300:h-[520px] object-cover transition-transform duration-300 transform group-hover:scale-105'>
              <Image
                src={slide.imageUrl}
                alt={slide.caption}
                fill="true"
                objectFit='cover'
                className="w-full h-64 600:h-72 770:h-80 1150:h-96 1300:h-[520px] object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{slide.caption}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselSlider;
