"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import Enquiry from "@/components/Enquiry";
export default function ProductPortfolio() {
  const [active, setActive] = useState(0);


const [isFormOpen, setIsFormOpen] = useState(false);


const products = [
  {
    title: "Cable Tray",
    production: "1500+",
    image: "/cabletray.png",
    link: "/categories/cable-tray",
  },
  {
    title: "MS Pipe",
    production: "5000+",
    image: "/pipe.png",
    link: "/categories/mild-steel-pipe",
  },
  {
    title: "TMT Bars",
    production: "3500+",
    image: "/iron-tmt-bar-500x500-removebg-preview.png",
    link: "/categories/tmt-bars",
  },
  {
    title: "GP Coils",
    production: "2500+",
    image: "/coil.png",
    link: "/categories/metal-coil",
  },
  {
    title: "GP Sheet / GI Sheet",
    production: "1500+",
    image: "/gisheet.png",
    link: "/categories/gi-sheet",
  },
];

  useEffect(() => {

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getPosition = (index) => {
    const diff =
      (index - active + products.length) % products.length;

    if (diff === 0)
      return {
        x: "translate-x-0",
        scale: "scale-100",
        z: "z-30",
        opacity: "opacity-100",
      };

    if (diff === 1)
      return {
        x: "translate-x-[320px]",
        scale: "scale-75",
        z: "z-20",
        opacity: "opacity-60",
      };

    if (diff === products.length - 1)
      return {
        x: "-translate-x-[320px]",
        scale: "scale-75",
        z: "z-20",
        opacity: "opacity-60",
      };

    return {
      x: "scale-50",
      scale: "scale-50",
      z: "z-0",
      opacity: "opacity-0",
    };
  };

  return (

 <section className="relative bg-[#f4f4f4] py-7 overflow-hidden">

  {/* dark shape behind cards */}
  <div className="absolute left-0 right-0 bottom-0 h-[380px] bg-[#191617]" />

  <div className="max-w-[1650px] mx-auto px-10 relative z-10">

    {/* HEADER */}
    <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">

      <div>
        <span className="text-2xl sm:text-[50px] font-medium text-blue-800 block leading-tight">
          Our Steel Product Portfolio
        </span>

        <h2 className="mt-2 text-sm sm:text-[18px] text-black max-w-full sm:max-w-[950px] leading-6">
          We provide high-quality structural steel products and fabrication materials that meet the demanding requirements of modern construction.
        </h2>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-5">

        <button  onClick={() => setIsFormOpen(true)} className="bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] text-white py-2 px-4 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-medium">
          Enquire Now
        </button>

        <button className="product-prev w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-black flex items-center justify-center">
          ←
        </button>

        <button className="product-next w-10 h-10 sm:w-16 sm:h-16 rounded-full border-2 border-black flex items-center justify-center">
          →
        </button>

      </div>
    </div>

    {/* SLIDER */}

    <Swiper
  modules={[Navigation, Autoplay]}
  navigation={{
    prevEl: ".product-prev",
    nextEl: ".product-next",
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  loop={true}
  speed={800}
  spaceBetween={35}

  /* ✅ MOBILE FIRST */
  slidesPerView={1}

  breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    1024: {
      slidesPerView: 2.25,
    },
  }}

  className="overflow-visible"
>
  {products.map((product, index) => (
    <SwiperSlide key={index}>
      
      {/* CARD */}
      <div className="relative h-[360px] sm:h-[500px] bg-[#ececec] overflow-hidden">

        {/* CONTENT */}
        <div className="p-6 sm:p-10">

          <h3 className="text-2xl sm:text-[46px] font-bold text-black">
            {product.title}
          </h3>

          {/* BUTTON + STATS */}
          <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">

<Link href={product.link}>
  <button className="border-2 border-blue-600 rounded-full px-5 py-2 sm:px-6 sm:py-3 flex items-center gap-3 text-sm sm:text-lg whitespace-nowrap hover:bg-blue-600 hover:text-white transition-all duration-300">
    Know More
    <ArrowRight className="w-4 h-4" />
  </button>
</Link>

        

            <div>
              <h4 className="text-3xl sm:text-[60px] leading-none font-light text-blue-600">
                {product.production}
              </h4>

              <p className="text-sm sm:text-[18px] text-black">
                Product Supply
              </p>
            </div>

          </div>
        </div>

        {/* DECORATION */}
        <Image
          src="/ChatGPT Image Jun 25, 2026, 02_37_20 PM.png"
          alt="Decoration"
          width={160}
          height={160}
          className="absolute rounded-full animate-rotate-slow left-2 bottom-2 sm:left-[10px] sm:bottom-[15px] w-20 sm:w-[160px] pointer-events-none"
        />

        {/* PRODUCT IMAGE */}
        <img
          src={product.image}
          alt={product.title}
          className="
            absolute
            right-0
            bottom-0
            w-[180px]
            sm:w-[440px]
            object-contain
            z-30
            pointer-events-none
          "
        />

      </div>
    </SwiperSlide>
  ))}
</Swiper>
  </div>


 {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}

</section>  


  );
}