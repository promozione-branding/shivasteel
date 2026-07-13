"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function TrustedBrands() {
const brands = [
 
  "/client/1.png",
  "/client/2.png",
    "/client/3.png",
      "/client/4.png",
        "/client/5.png",
          "/client/6.png",
            "/client/7.png",
            "/client/Logo 1.png",
];

  return (
    <section className="relative py-4 bg-white border-y border-cyan-200 overflow-hidden">
      <div className="w-full px-10 mx-auto ">
        <h3 className="text-center text-blue-950 font-bold tracking-[0.25em] text-sm mb-10">
          TRUSTED BY LEADING INDUSTRIES
        </h3>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
         
          }}
        >
       {brands.map((logo, index) => (
  <SwiperSlide key={index}>
    <div
      className="
      h-34
      rounded-2xl
      border
      border-slate-200
      bg-white
      flex
      items-center
      justify-center
      px-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
     <Image
  src={logo}
  alt=""
  width={200}
  height={200}
  className="
    h-50
    w-auto
    object-contain
    md:object-contain 
    xl:cover
 
    transition-all
    duration-500
 
  "
/>
    </div>
  </SwiperSlide>
))}
        </Swiper>
      </div>


    </section>
  );
}