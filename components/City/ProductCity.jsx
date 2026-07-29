"use client";

import React, { useState } from "react";
import Image from "next/image";
import Enquiry from "@/components/Enquiry";
import { Autoplay } from "swiper/modules";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductCity = ({city}) => {
        const [isFormOpen, setIsFormOpen] = useState(false);

  const products = [
    {
      name: "Plain GI Sheet",
      image: "/prod/GP Metal Sheet.webp",
    },
    {
      name: "GI Decking Sheet",
      image: "/prod/GI Decking Sheet (1).webp",
    },
    {
      name: "Galvanized Plain Sheets",
      image: "/prod/Galvanized Plain Sheets (1).webp",
    },
  ];

  const Card = ({ item }) => (

    <>
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-auto md:h-105 bg-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          width={300}
          height={200}
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-3 md:p-5 text-center">
        <h3 className="md:text-lg font-semibold text-gray-900 mb-2">
          {item.name}
        </h3>

        <p className="text-xs md:text-sm text-gray-600 mb-4">
          Premium quality {item.name} ideal for roofing, cladding, and
          industrial applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <button onClick={() => setIsFormOpen(true)}  className="bg-[#1a327b] text-white px-4 py-2 rounded-md text-sm hover:bg-[#041751] transition">
            Get Quote
          </button>

          <a
            href="https://wa.me/+919873656785"
            target="_blank"
            className="border border-green-600 text-green-600 px-4 py-2 rounded-md text-sm hover:bg-green-600 hover:text-white transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
     {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );

  return (
    <section className="w-full px-4 md:px-6 py-6 md:py-14 bg-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our Best-Selling GI Sheets in {city}
        </h2>

        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Explore our top-quality galvanized iron sheets designed for
          durability, corrosion resistance, and long-lasting performance in all
          environments.
        </p>
      </div>

      {/* ✅ Mobile Slider */}
      <div className="mt-10 md:hidden">
        <Swiper spaceBetween={12} slidesPerView={2}  loop={true} // ✅ infinite loop
  autoplay={{
    delay: 2000, // ⏱ speed (2 sec)
    disableOnInteraction: false, // keeps autoplay after swipe
  }}
  modules={[Autoplay]}>
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductCity;
