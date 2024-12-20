"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const CarouselSlider = ({ slides }) => {
  console.log("Slides data:", slides); // Debugging log

  return (
    <section className="w-full mx-auto">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
        }}
        className="overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative group">
            <div className="w-full h-[500px] overflow-hidden">
              <img
                src={slide.imageUrl || "https://via.placeholder.com/1600x500"}
                alt={slide.caption || "Slide image"}
                className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{slide.caption}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CarouselSlider;
