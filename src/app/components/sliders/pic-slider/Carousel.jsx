"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useGetFeaturedProductsQuery } from "../../../../../redux/features/productsApi";
import Loading from "../../Loader";
import Link from "next/link";

export default function ProductsCarousel() {
  const { data: slides, error, isLoading } = useGetFeaturedProductsQuery();
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      <div className="text-3xl  text-gray-800 mb-8 flex justify-between">
        <h2 className='font-bold text-primary'>Products Highlights</h2>
      </div>

      <div className="w-full max-w-5xl mx-auto py-8">
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
                href={`products/${slide?.category?.slug}/${slide?.slug}`}
              >
                <div
                  className="relative h-full w-full rounded-lg overflow-hidden shadow-lg"
                  style={{
                    backgroundImage: `url(${slide.photo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h2 className="text-2xl font-bold">{slide.name}</h2>
                    <p className="text-sm">{slide?.category?.name}</p>
                    <p className="text-sm opacity-80">{slide.words}</p>
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
