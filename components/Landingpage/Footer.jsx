"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter } from "react-icons/fa";
import {categories} from "@/Data"

const quickLinks = [
   { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "News & Events", href: "/our-blogs" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "GI Sheet", href: "/products/gi-sheet" },
  { label: "Mild Steel Pipe", href: "/products/mild-steel-pipe" },
  { label: "MS Plates", href: "/products/ms-plates" },
  { label: "GP Sheets", href: "/products/gp-sheets" },
  { label: "MS Sheets", href: "/products/ms-sheets" },
  { label: "Mild Steel Bars", href: "/products/mild-steel-bars" },
  { label: "Metal Coil", href: "/products/metal-coil" },
  { label: "Mild Steel Angle", href: "/products/mild-steel-angle" },
  { label: "TMT Bars", href: "/products/tmt-bars" },
  { label: "Cable Tray", href: "/products/cable-tray" },
];

const socialIcons = [ FaLinkedinIn];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f7] md:px-4  ">
      <div className="mx-auto flex w-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:flex-row">
        
        <div className="flex flex-col  justify-between bg-[#eef0f7] px-6  lg:w-[340px] lg:px-8 lg:py-5 xl:w-[380px]">
          <div>
            <div className="flex py-0.5 items-center justify-center lg:justify-start">
              <Image
                src="/footerlogo.png"
                alt="Shiva Steel Fabricators logo"
                width={160}
                height={90}
                className="h-20 w-auto sm:h-27 my-4 md:mb-0 "
              />
            </div>

            <p className="md:mt-6 text-md text-center md:text-left text-[#2f2e2e] sm:text-[15px] lg:mt-4">
              We at Shiva Steel Fabricators are involved in wholesale trade,
              supplier, and provision of services for a superior quality range
              of MS Sheet, Cable Tray, Colour, GI Decking Sheet, GP Sheet, MS
              Pipe, MS Heavy Plate, Mild Steel Chequered Plate, MS Cold Rolled
              Coils, MS Hot Rolled Coil, and more.
            </p>
          </div>

          <div className="mt-3 md:mt-5 rounded-2xl border mb-4 border-white/70 bg-white/70 p-3 backdrop-blur-sm">
            <h4 className="text-center text-lg font-semibold text-[#222] lg:text-left ">
              Connect With Us On LinkedIn
            </h4>
            <div className="mt-4 flex justify-center gap-3 ">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef0f7] text-blue-600 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10 xl:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">






            <div>
              <h3 className="mb-4 text-lg font-bold text-[#111] sm:text-[22px]">
                Our Products
              </h3>
           <ul className="space-y-3 text-[15px] text-[#555] sm:text-[16px]">
  {categories.map((item) => (
    <li key={`/categories/${item.id}`}>
      <Link
        href={`/categories/${item.id}`}
        className="flex items-center gap-3 transition hover:text-blue-600"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
        {item.name}
      </Link>
    </li>
  ))}
</ul>
            </div>





            <div>
              <h3 className="mb-4 text-lg font-bold text-[#111] sm:text-[22px]">
                Quick Links
              </h3>
              <ul className="space-y-3 text-[15px] text-[#555] sm:text-[16px]">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 transition hover:text-blue-600"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <h3 className="mb-4 text-lg font-bold text-[#111] sm:text-[22px]">
                Contact
              </h3>
            <div className="space-y-4 text-[#555]">




  <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
    <Phone className="mt-0.5 shrink-0 text-blue-600" size={18} />
    <a
      href="tel:+919873656785"
      className="text-sm sm:text-[15px] hover:text-blue-600 transition-colors"
    >
      +91-98736 56785
    </a>
  </div>


  <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
    <Phone className="mt-0.5 shrink-0 text-blue-600" size={18} />
    <a
      href="tel:+919716521402"
      className="text-sm sm:text-[15px] hover:text-blue-600 transition-colors"
    >
      +91-97165 21402
    </a>
  </div>


  <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
    <Phone className="mt-0.5 shrink-0 text-blue-600" size={18} />
    <a
      href="tel:+919069906984"
      className="text-sm sm:text-[15px] hover:text-blue-600 transition-colors"
    >
      +91-9069906984
    </a>
  </div>



  <div className="flex items-start gap-3 border-b border-slate-200 pb-3">
    <MapPin className="mt-0.5 shrink-0 text-blue-600" size={18} />
    <div
   
      className="text-sm leading-6 sm:text-[15px]  transition-colors"
    >
      X-43, Loha Mandi, Naraina Industrial Area, New Delhi
    </div>
  </div>

  <div className="flex items-start gap-3 pb-1">
    <Mail className="mt-0.5 shrink-0 text-blue-600" size={18} />
    <a
      href="mailto:shivasteel2019@gmail.com"
      className="text-sm sm:text-[15px] hover:text-blue-600 transition-colors"
    >
      shivasteel2019@gmail.com
    </a>
  </div>
</div>
            </div>

            <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-[#fffaf1] p-5 text-center shadow-sm lg:items-start lg:text-left">
              <h3 className="text-base text-center font-bold text-[#f9a826] sm:text-[18px]">
                Trust Elite Certificate
              </h3>

              <div className="mt-4 flex justify-center items-center mx-auto ">
                <Image
                  src="/TRUST-ELITE.webp"
                  alt="Trust Elite"
                  width={140}
                  height={140}
                  className="h-auto w-24 sm:w-28 lg:w-[120px]"
                />
              </div>

              <p className="mt-4 text-center text-sm leading-6 text-[#333] sm:text-[15px]">
                We are proud to present the Trust Elite Certificate of Excellence
                to Shiva Steel Fabricators for exceptional service and trust.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[22px]">
         

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center sm:flex-row sm:justify-between sm:px-6 lg:px-8">
              <p className="rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-[#444] sm:text-sm">
                Copyright © 2026
                <span className="ml-1 font-bold text-[#111]">
                  Shiva Steel Fabricators
                </span>
              </p>

              <div className="rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-[#444] sm:text-sm">
                Designed By
                <a
                  className="ml-1 font-semibold text-orange-600 transition hover:underline"
                  href="https://inquirybazaar.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inquiry Bazaar Pvt. Ltd.
                </a>
                <span className="ml-1 hidden sm:inline">| B2B Marketplace</span>
              </div>
            </div>
          </div>
        </div>
      </div>











      {/* Bottom Bar */}
<div className="mt-2 border-t border-slate-200 bg-[#111827]">
  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-slate-300 md:flex-row md:text-left">

    <p>
     Copyright   © 2026{" "}
      <span className="font-semibold text-white">
      Shiva Steel Fabricators
      </span>
    
    </p>

    <p>
      Website Designed By Inquiry Bazaar Pvt. Ltd. {" "}
      <a
        href="https://inquirybazaar.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-blue-400 transition hover:text-blue-300 hover:underline"
      >
       B2B Marketplace
      </a>{" "}
   
    </p>

  </div>
</div>
    </footer>
  );
}
