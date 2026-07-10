"use client";


import {
  Phone,
  ArrowRight,
  User,
  Mail,
  Lock,
  PhoneCall,
} from "lucide-react";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Enquiry from "@/components/Enquiry";
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

const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  product: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name || !form.phone || !form.product) {
    toast.error("Please fill all required fields");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(form.phone)) {
    toast.error("Enter a valid phone number");
    return;
  }

  try {
    setLoading(true);

    const formData = {
      platform: "Steel Hero Form",
      platformEmail: "care@inquirybazaar.com",
      name: form.name,
      phone: form.phone,
      email: form.email || "N/A",
      place: "N/A",
      product: form.product,
      message: `Interested Product: ${form.product}`,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      formData
    );

    if (data.success) {
      toast.success("Inquiry Submitted Successfully");

      setForm({
        name: "",
        phone: "",
        email: "",
        product: "",
      });
    } else {
      toast.error("Failed to submit inquiry");
    }
  } catch (error) {
    console.log(error);
    toast.error("Server Error");
  } finally {
    setLoading(false);
  }
};







  const [activeSlide, setActiveSlide] = useState(0);
const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>    <section className="relative mt-6 sm:mt-10 overflow-hidden">

      <Swiper
        modules={[Autoplay, EffectFade,Pagination]}
        effect="fade"
        loop
        speed={1200}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="h-[530px] sm:h-[750px] lg:h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div
              className="relative h-[570px] sm:h-[750px] lg:h-[800px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061220]/75 via-[#061220]/55 to-[#061220]/25" />

              <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-full">

                {/* RESPONSIVE GRID FIX */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_480px] gap-8 lg:gap-10 items-center h-full">

                  {/* LEFT CONTENT */}
                  <div className="max-w-full lg:max-w-[700px] text-center lg:text-left">

                    <span className="uppercase text-blue-300 font-bold tracking-[2px] text-xs sm:text-sm">
                      {slide.tag}
                    </span>

                    <h1 className="mt-4 text-white text-3xl sm:text-5xl lg:text-[64px] leading-tight font-extrabold">
                      {slide.title}{" "}
                      <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="mt-5 sm:mt-8 text-white text-sm sm:text-lg max-w-full lg:max-w-[600px] leading-7 sm:leading-8 mx-auto lg:mx-0">
                      {slide.desc}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 sm:mt-10 justify-center lg:justify-start">

                      <button  onClick={() => setIsFormOpen(true)} className="bg-blue-800 hover:bg-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-md flex items-center justify-center gap-3 font-semibold">
                        Send Inquiry
                        <ArrowRight size={18} />
                      </button>

                      <a href="tel:+919069906984" className="border border-white text-white px-6 sm:px-10 py-3 sm:py-4 rounded-md flex items-center justify-center gap-3 font-semibold hover:bg-white/10">
                        <Phone size={18} />
                        Call Now
                      </a>

                    </div>
                  </div>

                  {/* FORM */}
                  <div className=" hidden  md:flex justify-center lg:justify-end mt-6 lg:mt-0">

                    <div className="w-full max-w-[380px] sm:max-w-[430px]">

                      <div className="rounded-3xl bg-white p-5 sm:p-8">

                        <h3 className="text-center text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] bg-clip-text text-transparent">
                          Get Best Price Today
                        </h3>

                       <form
  onSubmit={handleSubmit}
  className="space-y-4 sm:space-y-5 mt-5"
>

                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A6FB6]" size={18} />
                       <input
  name="name"
  value={form.name}
  onChange={handleChange}
  className="h-12 sm:h-14 w-full rounded-xl border pl-12 outline-none"
  placeholder="Your Name"
/>
                          </div>

                          <div className="relative">
                            <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A6FB6]" size={18} />
                         <input
  name="phone"
  value={form.phone}
  onChange={(e) =>
    setForm({
      ...form,
      phone: e.target.value.replace(/\D/g, ""),
    })
  }
  maxLength={10}
  className="h-12 sm:h-14 w-full rounded-xl border pl-12 outline-none"
  placeholder="Phone Number"
/>
                          </div>

                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A6FB6]" size={18} />
                        <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  className="h-12 sm:h-14 w-full rounded-xl border pl-12 outline-none"
  placeholder="Email Address"
/>
                          </div>

                        <select
  name="product"
  value={form.product}
  onChange={handleChange}
  className="h-12 sm:h-14 w-full rounded-xl border px-4 outline-none"
>
  <option value="">Select Product</option>
  <option value="GI Sheet">GI Sheet</option>
  <option value="Mild Steel Pipe">Mild Steel Pipe</option>
  <option value="MS Plates">MS Plates</option>
  <option value="MS Sheets">MS Sheets</option>
  <option value="Mild Steel Bars">Mild Steel Bars</option>
  <option value="Metal Coil">Metal Coil</option>
  <option value="Mild Steel Angle">Mild Steel Angle</option>
  <option value="TMT Bars">TMT Bars</option>
  <option value="Cable Tray">Cable Tray</option>
</select>

                       <button
  type="submit"
  disabled={loading}
  className="w-full h-12 sm:h-14 rounded-xl bg-gradient-to-r from-[#0B4F8A] via-[#0A6FB6] to-[#0B8FCC] text-white font-semibold disabled:opacity-70"
>
  {loading ? "Submitting..." : "Request Quote Now →"}
</button>

                          <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                            <Lock size={14} />
                            Your information is safe & confidential.
                          </div>

                     </form>











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
     


 {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}

    </section>

     <div className="  w-full z-30 bg-blue-950 border-t border-white/10">

  <div className="max-w-[1400px] mx-auto grid grid-cols-4">

    {[
      ["25+", "Years"],
      ["500+", "Projects"],
      ["50+", "Partners"],
      ["100%", "Quality"],
    ].map((item, i) => (
      <div
        key={i}
        className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 py-3 sm:py-6 border-r border-white/10 last:border-r-0 text-center"
      >

        <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-full border border-blue-500 flex items-center justify-center text-blue-400 text-[10px] sm:text-base">
          ⚙
        </div>

        <div>
          <h4 className="text-white text-xs sm:text-2xl font-bold">
            {item[0]}
          </h4>
          <p className="text-gray-400 text-[9px] sm:text-sm">
            {item[1]}
          </p>
        </div>

      </div>
    ))}

  </div>
</div>

    </>


  );
}