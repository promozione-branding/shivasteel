"use client";

import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories } from "@/Data";

import {
  Phone,
  Mail,
  MapPin,
  BadgeCheck,
} from "lucide-react";


import Enquiry from "@/components/Enquiry";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[999] bg-white border-b border-slate-200">

        {/* TOP STRIP */}
      <div className="hidden lg:block border-b border-blue-800 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 text-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[13px]">

    {/* Left */}
    <div className="flex items-center gap-6">

      <a
        href="tel:+919873656785"
        className="flex items-center gap-2 hover:text-blue-200 transition"
      >
        <Phone className="h-3.5 w-3.5" />
      +91-9873656785
      </a>

       <a
        href="tel:+919069906984"
        className="flex items-center gap-2 hover:text-blue-200 transition"
      >
        <Phone className="h-3.5 w-3.5" />
       
+91-9069906984
      </a>

      <a
        href="mailto:shivasteel2019@gmail.com"
        className="flex items-center gap-2 hover:text-blue-200 transition"
      >
        <Mail className="h-3.5 w-3.5" />
       shivasteel2019@gmail.com

      </a>

      <div className="flex items-center gap-2">
        <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
        GST NO. : <span className="font-semibold">07AVGPM1830K1ZJ</span>
      </div>

    </div>

    {/* Right */}
    <div className="flex items-center gap-2 text-blue-100">

      <MapPin className="h-3.5 w-3.5 text-emerald-400" />

      <span className="font-bold">
     Industrial Area Phase 1, Naraina, New Delhi, Delhi, 110028
      </span>

    </div>

  </div>
</div>

        {/* MAIN NAV */}
        <div className="w-full mx-auto px-6 md:px-20 h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex flex-col leading-tight">
            <Image width={150} height={100} src="/Shiva Steel Fabricators logo.png"></Image>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10 text-xl text-black tracking-wider font-semibold">

            <Link href="/" className="hover:text-slate-900">Home</Link>
            <Link href="/about" className="hover:text-slate-900">About Us</Link>

            {/* PRODUCTS */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              {/* TRIGGER */}
              <div className="flex items-center gap-1 cursor-pointer py-6 hover:text-slate-900">
               Our Products <ChevronDown size={16} />
              </div>

              {/* HOVER BRIDGE */}
              <div className="absolute left-0 top-full h-6 w-full" />

              {/* MEGA MENU */}
              {megaOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2
                  w-[1100px] bg-white border border-slate-200 shadow-xl z-50 flex"
                >

                  {/* LEFT CATEGORY (sticky feel) */}
               {/* RIGHT PANEL */}




                {/* RIGHT PRODUCTS */}
               <div className="w-1/3 bg-blue-950 text-white">

    <div className="px-6 py-5 border-b border-white/30">
        <p className="uppercase text-xs tracking-[0.25em] text-white">
            Categories
        </p>
    </div>

    <div className="py-3">

        {categories.map((cat) => (

            <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                onMouseEnter={() => setActiveCategory(cat.id)}
                className={`group flex items-center justify-between px-6 py-2 transition-all

                ${
                    activeCategory === cat.id
                        ? "bg-white text-slate-900"
                        : "text-white hover:bg-white/10"
                }`}
            >

                <span className="font-medium">
                    {cat.name}
                </span>

                <span
                    className={`transition ${
                        activeCategory === cat.id
                            ? "translate-x-0"
                            : "group-hover:translate-x-1"
                    }`}
                >
                    →
                </span>

            </Link>

        ))}

    </div>

</div>








<div className="w-2/3 p-8 bg-gradient-to-br from-white via-slate-50 to-slate-100">

  {(() => {
    const active = categories.find(
      (c) => c.id === activeCategory
    );

    return (
      <>
        {/* Header */}
        <div className="flex items-center justify-between mb-7">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Product Category
            </p>

            <Link
              href={`/category/${active.id}`}
              className="group inline-flex items-center gap-2 mt-2"
            >
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-bluetransition">
                {active.name}
              </h3>

              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-bluegroup-hover:translate-x-1 transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <Link
            href={`/categories/${active.id}`}
            className="text-sm font-medium text-bluehover:text-[#FF5A1F]"
          >
            View Category →
          </Link>

        </div>

        {/* Products */}

        <div className="grid grid-cols-3 gap-5">

          {active.products.slice(0,3).map((p) => (

            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-[#FF5A1F]hover:shadow-xl transition-all duration-300 overflow-hidden"
            >

              <div className="h-44 bg-slate-50 flex items-center justify-center overflow-hidden">

                <Image
                  src={p.image?.[0]?.src || "/placeholder.png"}
                  alt={p.name}
                  width={170}
                  height={170}
                  className="object-contain transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-5">

                <h4 className="font-semibold text-slate-900 text-sm leading-6 line-clamp-2 group-hover:text-bluetransition">
                  {p.name}
                </h4>

                <div className="mt-4 flex items-center justify-between">

                  <span className="text-[11px] bg-[#FF5A1F]/20 text-bluerounded-full px-3 py-1">
                    Industrial Grade
                  </span>

                  <span className="text-slate-400 group-hover:translate-x-1 transition">
                    →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* Bottom */}

        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">

          <div>

            <p className="font-semibold text-slate-800">
              Looking for more products?
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Explore the complete collection.
            </p>

          </div>

          <Link
            href="/products"
            className="rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-bluetransition"
          >
            View All Products
          </Link>

        </div>

      </>
    );
  })()}

</div>

  
                </div>
              )}


            </div>

            <Link href="/our-blogs" className="hover:text-slate-900">
           News & Events
            </Link>

            <Link href="/contact" className="hover:text-slate-900">
              Contact Us
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-4">

         <a
  href="https://wa.me/919873656785"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-green-200 bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
>
  {/* Shine Effect */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

  <FaWhatsapp className="relative z-10 text-[50px] transition-transform duration-300 group-hover:scale-110" />
</a>


        <button
  onClick={() => setIsFormOpen(true)}
  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-7 py-3 text-md font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
>
  <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-white/20 to-emerald-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

  <span className="relative flex items-center gap-2">
    Request Quote

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m-6-6l6 6-6 6"
      />
    </svg>
  </span>
</button>
          </div>

          {/* MOBILE */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="p-6 flex flex-col gap-4 text-slate-700">

              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>

              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-slate-900 text-white py-2"
              >
                Request Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}
    </>
  );
}