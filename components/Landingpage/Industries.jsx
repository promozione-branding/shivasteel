"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { LogIn } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const industries = [
  {
    title: "Construction & Infrastructure",
    image: "/Construction.jfif",
  },
  {
    title: "Industrial Manufacturing",
    image: "/indus.jfif",
  },
  {
    title: "Engineering Projects",
    image: "/eng.jfif",
  },
  {
    title: "Warehousing & Logistics",
    image: "/warehouse.png",
  },
  {
    title: "Power & Energy Sector",
    image: "/power.webp",
  },
  {
    title: "Oil & Gas Industry",
    image: "/oil.jfif",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-[#f7f7f7] py-10">
      <div className="container mx-auto px-20">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            INDUSTRIES WE SERVE
          </span>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Industries We Serve
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At Shiva Steel Fabricator, we cater to the diverse steel
            requirements of various industries by supplying high-quality steel
            products that meet demanding project specifications. Our commitment
            to quality, reliability, and timely delivery has made us a trusted
            partner for businesses across multiple sectors.
          </p>
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
            992: {
              slidesPerView: 2,
            },
          }}
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="grid md:grid-cols-[220px_1fr]">
                  {/* Image */}
                  <div className="relative h-[280px] ">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-4">
                    <div>
                      <h3 className="mb-4 text-3xl font-bold text-slate-900">
                        {industry.title}
                      </h3>

                      <p className="text-md leading-9 text-slate-600">
                        At Shiva Steel Fabricator, we cater to the diverse
                        steel requirements of various industries by supplying
                        high-quality steel products that meet demanding project
                        specifications.
                      </p>
                    </div>

                    <div className="mt-2">
                      <div className="mb-6 h-px bg-slate-200" />

                      <button className="group flex items-center gap-3 text-orange-600">
                        <LogIn
                          size={22}
                          className="text-blue-700 transition-transform duration-300 group-hover:-translate-x-1"
                        />
                        <span className="font-medium uppercase underline underline-offset-4">
                          Read More
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}