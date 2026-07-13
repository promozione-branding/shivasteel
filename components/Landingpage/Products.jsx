"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "SAIL TMT Bars",
    image: "/bars.webp",
    link: "/products/sail-tmt-bars",
  },
  {
    title: "GI Plain Sheet",
    image: "/prod/2mm GP Sheet (1).webp",
    link: "/products/gi-plain-sheet",
  },
  {
    title: "Industrial GP Sheets",
    image: "/prod/Industrial GP Sheets (2).webp",
    link: "/products/industrial-gp-sheets",
  },
  {
    title: "TATA Mild Steel Sheet",
    image: "/prod/TATA Mild Steel Sheet (1).webp",
    link: "/products/tata-mild-steel-sheet",
  },
  {
    title: "Stainless Steel Electric Cable Tray",
    image: "/prod/Stainless Steel Electric Cable Tray (1).webp",
    link: "/products/stainless-steel-electric-cable-tray",
  },
];

export default function ProductShowcase() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto w-full px-5 lg:px-10 xl::px-19">
        {/* Heading */}
        <div className="mb-5 lg:mb-6 xl::mb-10 text-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm uppercase mb-2">
            OUR PRODUCTS
          </span>

          <h2 className="text-3xl font-bold text-blue-800 md:text-5xl">
           Our Steel Product Portfolio
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-cyan-500" />
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          
        >
          {products.map((product, index) => (
         <SwiperSlide key={index}>
  <Link href={product.link}>
    <div className="group overflow-hidden rounded-2xl bg-white  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      {/* Image */}
      <div className="relative h-[330px]  xl:h-[430px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-fill transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-between p-4 lg:p-3">
        <span className="text-black text-xl lg:text-lg font-bold">
          {product.title}
        </span>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 group-hover:rotate-45">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  </Link>
</SwiperSlide>
          ))}
        </Swiper>



      </div>
    </section>
  );
}