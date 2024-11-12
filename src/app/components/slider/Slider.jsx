// CarouselSlider.jsx
"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const CarouselSlider = ({ slides }) => {
  return (
    <section className="p-6 w-[380px] 600:w-[500px] 770:w-[700px] 1150:w-[900px] 1300:w-[1100px] mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
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
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative group">
            <a href={slide.href} target="_blank" rel="noopener noreferrer">
              <img
                src={slide.imageUrl}
                alt={slide.caption}
                className="w-full h-60 600:h-64 770:h-72 1150:h-80 1300:h-96 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
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
