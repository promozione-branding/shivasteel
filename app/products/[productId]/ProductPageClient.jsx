"use client";

import React, { useState } from "react";
import { categories } from "@/Data";
import Image from "next/image";
import Head from "next/head";
import Enquiry from "@/components/Enquiry";
import { Shield, Droplet, Dumbbell, Recycle } from "lucide-react";
import { redirect } from "next/navigation";
import {
  FaIndustry,
  FaShieldAlt,
  FaTruckMoving,
  FaCogs,
} from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

export default function ProductPage({ params }) {
  const { productId } = React.use(params);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const allProducts = categories.flatMap((c) => c.products);
  console.log(allProducts);
  const product = allProducts.find((p) => p.id === productId);

  const [activeImage, setActiveImage] = useState(product?.image[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");


const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  requirement: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};




const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.name.trim()) {
    return toast.error("Please enter your name");
  }

  if (!form.phone.trim()) {
    return toast.error("Please enter your phone number");
  }

  try {
    setLoading(true);

    const payload = {
      platform: "Shiva Steel  product page form",
      platformEmail: "shivasteel2019@gmail.com", 

      name: form.name,
      phone: form.phone,
      email: form.email || "N/A",

      place: "N/A",

      product: product.name,

      message:
        form.requirement ||
        `Inquiry for ${product.name}`,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      payload
    );

    if (data.success) {
      toast.success("Inquiry Submitted Successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        requirement: "",
      });
    } else {
      toast.error("Submission Failed");
    }
  } catch (err) {
    console.log(err);

    toast.error("Server Error");
  } finally {
    setLoading(false);
  }
};






  if (!product) {
    redirect("/");
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

const features = [
  {
    icon: <FaIndustry size={34} />,
    title: "Premium Steel Products",
    desc: "Supplying high-quality CR, HR, GP, GI, GC sheets, coils, slit coils, and structural steel products for diverse industrial applications.",
  },
  {
    icon: <FaShieldAlt size={34} />,
    title: "Quality You Can Trust",
    desc: "We source steel from leading brands like TATA, JSW, and SAIL, ensuring consistent quality, strength, and industry-standard performance.",
  },
  {
    icon: <FaTruckMoving size={34} />,
    title: "PAN India Delivery",
    desc: "Efficient logistics and ready stock enable us to deliver bulk steel orders safely and on time across India.",
  },
  {
    icon: <FaCogs size={34} />,
    title: "Custom Steel Solutions",
    desc: "Customized dimensions, slit widths, coil sizes, and fabrication support to meet the exact requirements of every project.",
  },
];


  return (
    <>
      <Head>
        <title>{product.metaTitle || product.name}</title>
        <meta
          name="description"
          content={product.metaDescription || product.name}
        />
      </Head>

      {/* ================= HERO ================= */}

   

      {/* ================= PRODUCT ================= */}

    <section className="relative  md:pt-45 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">

  {/* Background */}
  <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-200 blur-3xl opacity-50"></div>

  <div className="relative w-full mx-auto px-5 md:px-16">

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT IMAGE */}

      <div className="sticky top-28">

        <div className="relative    bg-blue-100 shadow-[0_35px_80px_rgba(15,23,42,.08)] overflow-hidden">

          {/* Premium Badge */}

          <div className="absolute top-6 right-6 z-20">

            <span className="rounded-full bg-blue-700 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-lg">
              Premium Quality
            </span>

          </div>

          <div
            className="relative h-[320px] md:h-[650px] w-full overflow-hidden bg-gradient-to-br from-slate-50 to-white cursor-zoom-in"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain md:object-fill transition-transform duration-500"
              style={{
                transformOrigin: origin,
                transform: isZoomed
                  ? "scale(1.35)"
                  : "scale(1)",
              }}
            />
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div>

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Technical Specifications
        </span>

        <h2 className="mt-10 text-center md:text-start md:mt-5 text-4xl font-bold text-slate-900">
         {product.name}
        </h2>

        <p className="mt-4 text-slate-500 leading-6 text-center md:text-start md:leading-8">
          Every product supplied by Shiva Steel Fabricators undergoes
          stringent quality inspection to ensure durability, precision,
          and long-term industrial performance.
        </p>

        {/* SPEC CARD */}

        <div className=" mt-5 md:mt-10 rounded-3xl border border-slate-200 bg-white p-5 md:p-8 shadow-xl">

          <div className="grid  gap-3 md:gap-5">

            {product.specs?.map((spec, i) => (

              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2 md:px-5 md:py-4 transition hover:border-blue-200 hover:bg-blue-50"
              >

                <span className="font-semibold text-slate-900">
                  {spec.label}
                </span>

                <span className="text-slate-600 text-right">
                  {spec.value}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-6 md:mt-10 flex justify-center items-center gap-2 md:gap-6">

          <button
            onClick={() => setIsFormOpen(true)}
            className="group px-2 md:px-4 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-950 py-4 text-sm md:text-lg font-semibold text-white shadow-xl transition hover:-translate-y-1"
          >
            Request Quote →
          </button>

          <a
            href={`https://wa.me/919873656785?text=Hello I am interested in ${product.name}`}
            target="_blank"
            className="rounded-2xl px-4 border border-green-500 py-4 text-center font-semibold text-green-600 text-sm transition hover:bg-green-500 hover:text-white"
          >
            WhatsApp Enquiry
          </a>

          <a
            href="/brochure.pdf"
            download
            className="rounded-2xl px-4 border border-slate-300 bg-black py-4 text-center font-semibold text-sm transition hover:bg-slate-900 text-white"
          >
            Download Brochure
          </a>

        </div>

        {/* TRUST */}

        <div className="mt-10 grid grid-cols-3 gap-4">

          <div className="rounded-2xl flex justify-center items-center flex-col bg-white p-3 md:p-5 text-center shadow-md">
            <h4 className="text-2xl font-bold text-blue-700">
              25+
            </h4>
            <p className="text-sm text-slate-500">
              Years Experience
            </p>
          </div>

          <div className="rounded-2xl flex justify-center items-center flex-col bg-white p-3 md:p-5 text-center shadow-md">
            <h4 className="text-2xl font-bold text-blue-700">
              ISO
            </h4>
            <p className="text-sm text-slate-500">
              Certified
            </p>
          </div>

          <div className="rounded-2xl flex justify-center items-center flex-col bg-white p-3 md:p-5 text-center shadow-md">
            <h4 className="text-2xl font-bold text-blue-700">
              PAN
            </h4>
            <p className="text-sm text-center text-slate-500">
              India Supply
            </p>
          </div>

        </div>

      </div>

    </div>

    {isFormOpen && (
      <Enquiry
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    )}

  </div>

</section>


      {/* ===== DESCRIPTION ===== */}
    <section className="relative  bg-gradient-to-b from-slate-50 via-white to-slate-100 md:py-15">

  {/* background */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50" />
    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-slate-200 blur-3xl opacity-40" />
  </div>

  <div className="relative w-full mx-auto px-3 md:px-10">

    <div className="relative grid lg:grid-cols-[1.6fr_.8fr] gap-5 md:gap-10">

      {/* LEFT */}

      <div className="rounded-3xl bg-white p-5 md:p-10 shadow-xl">

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Product Information
        </span>

        <h2 className="mt-5 text-2xl md:text-4xl font-bold text-slate-900">
          Product Overview
        </h2>

        <div className="mt-6 md:mt-8 space-y-8">

          {Array.isArray(product.description) &&
            product.description.map((block, i) => {

              if (block.type === "h2")
                return (
                  <h3
                    key={i}
                    className="text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-2 md:pl-4"
                  >
                    {block.text}
                  </h3>
                );

              if (block.type === "ul")
                return (
                  <ul key={i} className="space-y-5">

                    {block.items.map((item, j) => (

                      <li
                        key={j}
                        className="flex gap-4 items-start "
                      >

                        <div className="mt-1 h-9 w-9 rounded-full  flex items-center justify-center">

                          <span className="material-symbols-outlined text-blue-700">
                            check
                          </span>

                        </div>

                        <p
                          className="leading-6 md:leading-8 text-black"
                          dangerouslySetInnerHTML={{
                            __html: item,
                          }}
                        />

                      </li>

                    ))}

                  </ul>
                );

            })}

        </div>

      </div>

      {/* RIGHT */}

      <div className="lg:sticky lg:top-28 h-fit">

        <div className="rounded-3xl border bg-white p-5 md:p-8 shadow-xl">

          <h3 className="text-3xl font-bold">
            Request Quote
          </h3>

          <p className="mt-2 text-slate-500">
            Fill the form and our expert will contact you shortly.
          </p>

       <form
  onSubmit={handleSubmit}
  className="mt-3 space-y-4"
>

        <input
  name="name"
  value={form.name}
  onChange={handleChange}
  placeholder="Full Name"
  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
/>

           <input
  name="phone"
  value={form.phone}
  onChange={handleChange}
  maxLength={10}
  pattern="[0-9]{10}"
  minLength={10}
  placeholder="Phone Number"
  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
/>

       <input
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
/>

        <textarea
  rows={5}
  name="requirement"
  value={form.requirement}
  onChange={handleChange}
  placeholder="Your Requirement"
  className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"
/>

          <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 py-4 font-semibold text-white shadow-lg hover:scale-[1.02] transition disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Submitting..." : "Get Instant Quote"}
</button>

          </form>

          <div className="mt-8 hidden md:block rounded-2xl bg-slate-50 p-5">

            <h4 className="font-semibold text-slate-900">
              Why Choose Us?
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">

              <li>✓ Premium Quality Steel</li>
              <li>✓ Bulk Stock Available</li>
              <li>✓ Fast PAN India Delivery</li>
              <li>✓ Competitive Pricing</li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


     <section className="relative overflow-hidden bg-gradient-to-br from-[#062b43] via-[#0b3f62] to-[#031926] py-8">

  {/* Decorative Background */}
  <div className="absolute inset-0">
    <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />

    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>

  <div className="relative w-full mx-auto px-6 md:px-16">

    <div className="text-center mb-10">

      <span className="inline-flex rounded-full border border-blue-300/30 bg-white/5 px-5 py-2 text-sm font-semibold tracking-widest uppercase text-blue-200 backdrop-blur">
        Why Choose Shiva Steel Fabricators
      </span>

      <h2 className="mt-5 text-2xl md:text-5xl font-bold text-white">
        Trusted Steel Partner for Every Industry
      </h2>

    

    </div>

    <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-4">

      {features.map((item, index) => (

        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 md:p-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/40 hover:bg-white/10 hover:shadow-[0_25px_60px_rgba(0,140,255,.18)]"
        >

          {/* Top Glow */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

          <div className="flex h-13 w-13  items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
            {item.icon}
          </div>

          <h3 className="mt-3 text-sm md:text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-3  leading-5 md:leading-8 text-[12px] md:text-lg   text-slate-300">
            {item.desc}
          </p>

          <div className="mt-2 md:mt-8 flex items-center text-sm font-semibold text-cyan-300">
            Learn More
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

    </>
  );
}
