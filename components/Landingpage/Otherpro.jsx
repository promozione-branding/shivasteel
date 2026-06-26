"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";

import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import "swiper/css";

export default function ProductPortfolio() {
  const [active, setActive] = useState(0);



const products = [


   {
    title: "Cable Tray",
    production: "1500+",
    image: "/cabletray.png",
  },
  {
    title: "MS pipe",
    production: "5000+",
    image: "/pipe.png",
  },
  {
    title: "Steel Pipe",
    production: "3500+",
    image: "/iron-tmt-bar-500x500-removebg-preview.png",
  },
  {
    title: "Gp Coils",
    production: "2500+",
    image: "/coil.png",
  },
  {
    title: "GP Sheet / GI Sheet",
    production: "1500+",
    image: "/gisheet.png",
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
    <div className="flex justify-between items-start mb-8">

      <div>
        <span className="text-[50px] font-medium text-[#FF5A1F]">
        Our Steel Product Portfolio
        </span>

        <h2 className="mt-2 text-[18px]   text-black max-w-[950px]">
      We provide high-quality structural steel products and fabrication materials that meet the demanding requirements of modern construction and industrial applications. Every product is sourced from trusted manufacturers to ensure superior performance, reliability, and long-term value.
        </h2>
      </div>

      <div className="flex items-center gap-5">

        <button className="bg-[#FF5A1F] text-white px-8 py-4 rounded-full text-lg font-medium">
          Enquire Now
        </button>

        <button className="product-prev w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
          <ArrowLeft size={28} />
        </button>

        <button className="product-next w-16 h-16 rounded-full border-2 border-black flex items-center justify-center">
          <ArrowRight size={28} />
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
  slidesPerView={2.25}
  className="overflow-visible"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[500px] bg-[#ececec] overflow-visible">

            {/* decorative blocks */}

        

            <div className="p-10">

              <h3 className="text-[46px] font-bold text-black">
                {product.title}
              </h3>

            <div className="mt-5 flex items-center gap-10">
  <button className="border-2 border-[#FF5A1F] rounded-full px-6 py-3 flex items-center gap-3 text-lg whitespace-nowrap">
    Know More
  </button>

  <div>
    <h4 className="text-[60px] leading-none font-light text-[#FF5A1F]">
      {product.production}
    </h4>

    <p className="text-[18px] text-black">
      Product Supply
    </p>
  </div>
</div>

            </div>

            {/* stats */}

          <Image
  src="/ChatGPT Image Jun 25, 2026, 02_37_20 PM.png"
  alt="Decoration"
  width={160}
  height={160}
  className="absolute animate-rotate-slow left-[10px] bottom-[15px] rounded-full   pointer-events-none"
/>

            {/* image */}

            <img
              src={product.image}
              alt={product.title}
              className="
                absolute
                right-0
                bottom-[-40px]
                w-[440px]
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
</section>


  );
}