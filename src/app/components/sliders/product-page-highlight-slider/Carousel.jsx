"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useGetFeaturedProductsQuery } from "../../../../../redux/features/productsApi";
import Loading from "../../Loader";
import Link from "next/link";

export default function ProductsHighlightCarousel() {
  const { data: slides, error, isLoading } =   useGetFeaturedProductsQuery();
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading products</div>;
  } 

  return (
    <div className="py-8">
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
            <Link
                href={`/products/${slide?.category?.slug}/${slide?.slug}`}
              >
              <div
                className="relative h-full w-full rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
                style={{
                  backgroundImage: `url(${slide.photo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h2 className="text-xl md:text-2xl font-bold">{slide.name}</h2>
                  <p className="text-sm opacity-90">{slide.category?.name}</p>
                  <p className="text-sm opacity-70 line-clamp-2">{slide.description}</p>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
