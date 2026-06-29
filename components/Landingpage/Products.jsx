"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "GP Plain Sheet",
    image: "/1.webp",
  },
  {
    title: "Mild Steel Round Pipe",
    image: "/2.webp",
  },
  {
    title: "MS Sheet Plate",
   image: "/1.webp",
  },
  {
    title: "Mild Steel Sheet",
image: "/2.webp",
  },
  {
    title: "Mild Steel Round Pipe",
   image: "/3.webp",
  },
 
];

export default function ProductShowcase() {
  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto w-full px-5 md:px-19">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            OUR PRODUCTS
          </span>

          <h2 className="text-4xl font-bold text-blue-800 md:text-5xl">
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
              <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-[430px] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 "
                  />

         
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-blue-500">
                      {product.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center justify-between p-2">
                  <span className="font-medium text-slate-600">
                    Premium Quality Steel Product
                  </span>

                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 hover:rotate-45">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </section>
  );
}