"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function ProductsHighlightCarousel() {
  const slides = [
    {
      name: "HEPA Box",
      category: "Cleanroom",
      slug: "desiccant-dehumidifier",
      shortDescription: "High-performance HEPA filters for cleanrooms.",
      image: "https://admin.cleanroomac.com/api/v1/products/35/photos/1.jpeg",
    },
    {
      name: "Desiccant Dehumidifier",
      category: "HVAC",
      slug: "desiccant-dehumidifier",
      shortDescription: "Efficient dehumidification for controlled environments.",
      image: "https://admin.cleanroomac.com/api/v1/products/11/photos/1.jpeg",
    },
    {
      name: "Ulpa & Hepa Filter- Deepplet Type",
      category: "Air-Filtering",
      slug: "desiccant-dehumidifier",
      shortDescription: "Advanced air filtration for industrial needs.",
      image: "https://admin.cleanroomac.com/api/v1/products/34/photos/1.jpeg",
    },
    {
      name: "Modular Hardwall Clean Room MCR-4HC-B",
      category: "Cleanroom",
      slug: "desiccant-dehumidifier",
      shortDescription: "Modular cleanroom solutions with hardwall construction.",
      image: "https://admin.cleanroomac.com/api/v1/products/1/photos/1.jpeg",
    },
  ];

  return (
    <div className="py-4">
      <div className="text-3xl text-gray-800 mb-8 flex justify-between">
        <h2 className="font-bold text-primary">You may also like</h2>
      </div>
      <div className="w-full max-w-6xl mx-auto pb-8 pt-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-[400px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h2 className="text-xl md:text-2xl font-bold">{slide.name}</h2>
                  <p className="text-sm opacity-90">{slide.category}</p>
                  <p className="text-sm opacity-70">{slide.shortDescription}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
