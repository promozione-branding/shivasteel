"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f8f8] overflow-hidden">

      <div className="grid lg:grid-cols-[300px_1fr] min-h-[650px]">

        {/* ================= LEFT SECTION ================= */}
        <div className="bg-[#eef0f7] px-6 sm:px-7 py-6 flex flex-col">

          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.webp"
              alt="logo"
              className="h-20 sm:h-28 w-auto"
            />
          </div>

          {/* Description */}
          <p className="mt-4 sm:mt-8 text-sm sm:text-[15px] leading-6 sm:leading-[2] text-[#2f2e2e]">
            We at Shiva Steel Fabricators are involved in wholesale trade,
            supplier, and provision of services for a superior quality range of
            MS Sheet, Cable Tray, Colour, GI Decking Sheet, GP Sheet, MS Pipe,
            MS Heavy Plate, Mild Steel Chequered Plate, MS Cold Rolled Coils,
            MS Hot Rolled Coil, and more.
          </p>

          {/* Social */}
          <div className="mt-auto pt-8">
            <div className="flex flex-col items-center gap-5">

              <h4 className="font-bold text-lg sm:text-[22px] text-[#222] text-center">
                Connect With Us
              </h4>

              <div className="flex gap-3">
                {[FaFacebookF, FaLinkedinIn, FaSkype, FaTwitter].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center text-blue-600 hover:scale-105 transition"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>

            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}
        <div className="px-5 sm:px-8 lg:px-16 py-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-[22px] font-bold mb-4 sm:mb-8">
                Quick Links
              </h3>

              <ul className="space-y-3 sm:space-y-6 text-sm sm:text-[18px] text-[#444]">
                {["About Us", "Our Products", "News & Events", "Contact Us"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="flex items-center gap-3 hover:text-blue-600"
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg sm:text-[22px] font-bold mb-4 sm:mb-8">
                Our Products
              </h3>

              <ul className="space-y-3 sm:space-y-6 text-sm sm:text-[18px] text-[#444]">
                {[
                  "GP Plain Sheet",
                  "Mild Steel Round Pipe",
                  "MS Sheet Plate",
                  "Mild Steel Sheet",
                  "Mild Steel Flat Bar",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-3 hover:text-blue-600"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg sm:text-[22px] font-bold mb-4 sm:mb-8">
                Contact
              </h3>

              <div className="space-y-4 text-[#444]">

                <div className="flex gap-4 border-b pb-3">
                  <Phone className="text-blue-600" />
                  <p className="text-sm sm:text-[18px]">+91-9069906984</p>
                </div>

                <div className="flex gap-4 border-b pb-3">
                  <Phone className="text-blue-600" />
                  <p className="text-sm sm:text-[18px]">+91-98736 56785</p>
                </div>

                <div className="flex gap-4 border-b pb-3">
                  <MapPin className="text-blue-600" />
                  <p className="text-sm sm:text-[16px] leading-6">
                    X-43, Loha Mandi, Naraina Industrial Area, New Delhi
                  </p>
                </div>

                <div className="flex gap-4 border-b pb-3">
                  <Mail className="text-blue-600" />
                  <p className="text-sm sm:text-[18px]">
                    shivasteel2019@gmail.com
                  </p>
                </div>

              </div>
            </div>

            {/* Trust Elite */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

              <h3 className="text-lg sm:text-[21px] font-bold text-[#f9a826]">
                Trust Elite Certificate
              </h3>

              <div className="mt-3">
                <Image
                  src="/TRUST-ELITE.webp"
                  alt="Trust Elite"
                  width={120}
                  height={120}
                  className="w-24 sm:w-28 lg:w-[120px] h-auto"
                />
              </div>

              <p className="text-sm sm:text-[15px] mt-3 leading-6 max-w-sm text-black">
                We are proud to present the Trust Elite Certificate of Excellence
                to Shiva Steel Fabricators for exceptional service and trust.
              </p>

            </div>

          </div>

          {/* ================= BOTTOM BANNER ================= */}
          <div className="relative w-full mt-10">

            <Image
              src="/subscribe-area-bg.png"
              alt="footer background"
              width={2000}
              height={400}
              className="w-full h-[110px] sm:h-[140px] object-cover"
            />

            <div className="absolute inset-0 flex flex-col md:flex-row items-center md:justify-between px-4 sm:px-6 lg:px-16 text-center md:text-left gap-3">

              <p className="text-xs sm:text-sm md:text-base text-[#444] bg-white/70 px-3 py-1 rounded-md">
                Copyright © 2026{" "}
                <span className="font-bold">Shiva Steel Fabricators</span>
              </p>

              <div className="text-xs sm:text-sm md:text-base text-[#444] bg-white/70 px-3 py-1 rounded-md">
                Designed By{" "}
                <a
                  className="text-orange-600 font-medium hover:underline"
                  href="https://inquirybazaar.com/"
                  target="_blank"
                >
                  Inquiry Bazaar Pvt. Ltd.
                </a>{" "}
                <span className="hidden sm:inline">| B2B Marketplace</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}