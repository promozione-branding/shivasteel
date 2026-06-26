"use client";

import { useState } from "react";
import {
  Phone,
  ArrowRight,
  User,
  Mail,
  Lock,
  PhoneCall,
} from "lucide-react";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/check.jfif",
    tag: "INDUSTRIAL EXCELLENCE",
    title: "Premium TMT Bars & Rods ",
    highlight: "for Every Industry",
    desc: "High-quality GI Sheets for roofing, fabrication, cladding, and construction applications with superior corrosion resistance and long-lasting durability.",
  },
  {
    image: "/cabletray.jpeg",
    tag: "TRUSTED SUPPLIER",
    title: "Strong & Reliable",
    highlight: " Cable Tray Solutions",
    desc: "Quality Cable Trays and Perforated Cable Trays for safe, organized, and efficient cable management in industrial and commercial projects.",
  },
  {
    image: "/bg4.jfif",
    tag: "QUALITY ASSURED",
    title: "Premium Steel Pipes for ",
    highlight: "Industrial Applications",
    desc: "Durable GP Coils with excellent finish and corrosion resistance, ideal for fabrication, roofing, engineering, and manufacturing projects.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative mt-10 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) =>
          setActiveSlide(swiper.realIndex)
        }
        className="h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[800px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
             <>
  <div className="absolute inset-0 bg-gradient-to-r from-[#061220]/75 via-[#061220]/55 to-[#061220]/25" />

  {/* Orange Glow */}
  <div className="absolute left-20 top-40 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

  {/* Blue Glow */}
  <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[150px]" />
</>

              <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10 h-full">
                <div className="grid lg:grid-cols-[1.1fr_480px] gap-10 items-center h-full">
                  
                  {/* LEFT CONTENT */}
                 <div className="max-w-[700px]"> 





                    <span className="uppercase text-blue-800 font-bold tracking-[2px] text-sm">
                      {slide.tag}
                    </span>

              <h1 className="mt-4 text-white text-[42px] md:text-[64px] leading-[1.1] font-extrabold">
  {slide.title}{" "}
  <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
    {slide.highlight}
  </span>
</h1>

                    <p className="mt-8 text-white text-lg max-w-[600px] leading-8">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">
                      <button className="bg-blue-800 hover:bg-[#e44c12] text-white px-10 py-4 rounded-md flex items-center gap-3 font-semibold transition-all">
                        Send Inquiry
                        <ArrowRight size={18} />
                      </button>

                      <button className="border border-white hover:bg-white/10 text-white px-10 py-4 rounded-md flex items-center gap-3 font-semibold transition-all">
                        <Phone size={18} />
                        Call Now
                      </button>
                    </div>



                    
                  </div>

                  {/* FIXED FORM */}
               <div className="flex justify-center lg:justify-end">
  <div className="relative w-full max-w-[430px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] p-[1px] shadow-[0_25px_70px_rgba(0,102,204,0.35)]">

    {/* Glass Card */}
    <div className="rounded-[22px] bg-white p-8">

      <h3 className="mb-2 text-center text-3xl font-bold bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] bg-clip-text text-transparent">
        Get Best Price Today
      </h3>

    

      <div className="space-y-5">

        <div className="relative">
          <User
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A6FB6]"
          />
          <input
            placeholder="Your Name"
            className="h-14 w-full rounded-xl border border-slate-200 pl-12 transition focus:border-[#0A6FB6] focus:ring-4 focus:ring-blue-100 outline-none"
          />
        </div>

        <div className="relative">
          <PhoneCall
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A6FB6]"
          />
          <input
            placeholder="Phone Number"
            className="h-14 w-full rounded-xl border border-slate-200 pl-12 transition focus:border-[#0A6FB6] focus:ring-4 focus:ring-blue-100 outline-none"
          />
        </div>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A6FB6]"
          />
          <input
            placeholder="Email Address"
            className="h-14 w-full rounded-xl border border-slate-200 pl-12 transition focus:border-[#0A6FB6] focus:ring-4 focus:ring-blue-100 outline-none"
          />
        </div>

        <select className="h-14 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-[#0A6FB6] focus:ring-4 focus:ring-blue-100">
          <option>Select Product / Requirement</option>
        </select>

        <button className="group flex h-14 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(10,111,182,0.45)]">
          Request Quote Now
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
          <Lock size={14} />
          Your information is safe & confidential.
        </div>

      </div>
    </div>
  </div>
</div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* STATS BAR */}
      <div className="absolute bottom-0 left-0 w-full z-30 bg-blue-950 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            ["25+", "Years of Experience"],
            ["500+", "Projects Completed"],
            ["50+", "Global Partners"],
            ["100%", "Quality Assured"],
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-4 py-6 border-r border-white/10"
            >
              <div className="w-12 h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400">
                ⚙
              </div>

              <div>
                <h4 className="text-white text-2xl font-bold">
                  {item[0]}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 120px !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          background: #ff5a1f;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}