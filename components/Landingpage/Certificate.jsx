"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const certificates = [
  {
    image: "/c1.webp",
  },
  {
    image: "/c2.webp",
  },
];

export default function CertificateSection() {
  return (
    <section className="py-6 xl:py-13 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-5 md:mb-10">
          <span className="text-[#1a3380] font-semibold uppercase tracking-widest">
            Quality Assurance
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Our <span className="text-[#1a3380]">Certificates</span>
          </h2>

          <div className="w-20 h-1 bg-[#1a3380] rounded-full mx-auto mt-5"></div>

          {/* <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            We are committed to delivering certified quality products and
            trusted industrial air solutions.
          </p> */}
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl overflow-hidden  hover:shadow-2xl transition duration-300 border border-slate-200">

                <div className="relative h-[240px] md:h-[420px] bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-3 md:p-6 hover:scale-105 transition duration-500"
                  />
                </div>


              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}