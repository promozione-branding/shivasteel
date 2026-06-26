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
    image: "/bg1.avif",
    tag: "INDUSTRIAL EXCELLENCE",
    title: "Premium GI Sheets ",
    highlight: "for Every Industry",
    desc: "High-quality GI Sheets for roofing, fabrication, cladding, and construction applications with superior corrosion resistance and long-lasting durability.",
  },
  {
    image: "/bg3.webp",
    tag: "TRUSTED SUPPLIER",
    title: "Strong & Reliable",
    highlight: " Cable Tray Solutions",
    desc: "Quality Cable Trays and Perforated Cable Trays for safe, organized, and efficient cable management in industrial and commercial projects.",
  },
  {
    image: "/bg4.jfif",
    tag: "QUALITY ASSURED",
    title: "Premium GP Coils for ",
    highlight: "Industrial Applications",
    desc: "Durable GP Coils with excellent finish and corrosion resistance, ideal for fabrication, roofing, engineering, and manufacturing projects.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative mt-10 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
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
  <div className="absolute inset-0 bg-gradient-to-r from-[#061220]/95 via-[#061220]/75 to-[#061220]/45" />

  {/* Orange Glow */}
  <div className="absolute left-20 top-40 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[150px]" />

  {/* Blue Glow */}
  <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[150px]" />
</>

              <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10 h-full">
                <div className="grid lg:grid-cols-[1.1fr_480px] gap-10 items-center h-full">
                  
                  {/* LEFT CONTENT */}
                 <div className="max-w-[700px]"> 





                    <span className="uppercase text-[#ff5a1f] font-bold tracking-[2px] text-sm">
                      {slide.tag}
                    </span>

                    <h1 className="mt-4 text-white text-[42px] md:text-[64px] leading-[1.1] font-extrabold">
                      {slide.title}
                    
                     {" "}
                      <span className="text-[#ff5a1f]">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="mt-8 text-white text-lg max-w-[600px] leading-8">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">
                      <button className="bg-[#ff5a1f] hover:bg-[#e44c12] text-white px-10 py-4 rounded-md flex items-center gap-3 font-semibold transition-all">
                        Send Inquiry
                        <ArrowRight size={18} />
                      </button>

                      <button className="border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-md flex items-center gap-3 font-semibold transition-all">
                        <Phone size={18} />
                        Call Now
                      </button>
                    </div>



                    
                  </div>

                  {/* FIXED FORM */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-[420px] p-8">
                      <h3 className="text-center text-[#ff5a1f] text-2xl font-bold mb-8">
                        Get Best Price Today
                      </h3>

                      <div className="space-y-4">
                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />
                          <input
                            placeholder="Your Name"
                            className="w-full h-14 pl-12 border rounded-md"
                          />
                        </div>

                        <div className="relative">
                          <PhoneCall
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />
                          <input
                            placeholder="Phone Number"
                            className="w-full h-14 pl-12 border rounded-md"
                          />
                        </div>

                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                          />
                          <input
                            placeholder="Email Address"
                            className="w-full h-14 pl-12 border rounded-md"
                          />
                        </div>

                        <select className="w-full h-14 border rounded-md px-4">
                          <option>
                            Select Product / Requirement
                          </option>
                        </select>

                        <button className="w-full h-14 bg-[#ff5a1f] hover:bg-[#e44c12] text-white font-semibold rounded-md">
                          Request Quote Now
                        </button>

                        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                          <Lock size={14} />
                          We respect your privacy. Your details are safe with us.
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
            ["40+", "Years of Experience"],
            ["1000+", "Projects Completed"],
            ["500+", "Satisfied Clients"],
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