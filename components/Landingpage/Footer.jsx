"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mail,
  Clock3,
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
        
        {/* Left Section */}
        <div className="bg-[#eef0f7] px-7  py-10 flex flex-col">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/logo.webp"
                alt="logo"
                className="h-30 w-auto"
              />

          
            </div>
          </div>

          {/* Description */}
          <p className="mt-10 text-[17px] leading-[2] text-[#2f2e2e] ">
            Significantly pushed und the frugal lemur one and
            meretricious lucrative inside before swept
            magnificently expand our Industries via. Lorem
            ipsum dolor sit amet adipscing.
          </p>

          {/* Social */}
          <div className="mt-auto  pt-13">
            <div className="flex flex-col items-center gap-6">
              <h4 className="font-bold text-[22px] text-[#222]">
                Connect With Us
              </h4>

              <div className="flex gap-3">
                {[
                  <FaFacebookF />,
                  <FaLinkedinIn />,
                  <FaSkype />,
                  <FaTwitter />,
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#ff7d17] transition"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="px-8 lg:px-16  py-20 relative">
          <div className="grid md:grid-cols-4 gap-16">
            
            {/* Industry */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-6 h-[2px] bg-[#ff7d17]" />
                <h3 className="text-[22px] font-bold text-[#222]">
                  Our Industry
                </h3>
              </div>

              <ul className="space-y-6">
                {[
                  "Automation Industry",
                  "Power and Energy",
                  "Civil Engineering",
                  "Healthy & safety",
                  "Plant Hire",
                  "Petroleum Industry",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-4 text-[18px] text-[#444] hover:text-[#ff7d17]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#2b6cb0]" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-6 h-[2px] bg-[#ff7d17]" />
                <h3 className="text-[22px] font-bold text-[#222]">
                  About Erdunt
                </h3>
              </div>

              <ul className="space-y-6">
                {[
                  "About Us",
                  "Faqs",
                  "Our Team",
                  "Testimonials",
                  "News List View",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-4 text-[18px] text-[#444] hover:text-[#ff7d17]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#2b6cb0]" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-6 h-[2px] bg-[#ff7d17]" />
                <h3 className="text-[22px] font-bold text-[#222]">
                  Contact
                </h3>
              </div>

              <div className="space-y-0">
                <div className="flex gap-6 py-5 border-b border-[#e6e6e6]">
                  <Phone
                    size={28}
                    className="text-[#ff7d17] shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444]">
                    +1-(934)-256-7850
                  </p>
                </div>

                <div className="flex gap-6 py-5 border-b border-[#e6e6e6]">
                  <MapPin
                    size={28}
                    className="text-[#ff7d17] shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444] leading-8">
                    950 Alpaca, Virginia
                    <br />
                    32809 - United States
                  </p>
                </div>

                <div className="flex gap-6 py-5 border-b border-[#e6e6e6]">
                  <Mail
                    size={28}
                    className="text-[#ff7d17] shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444]">
                    info@example.com
                  </p>
                </div>

                <div className="flex gap-6 py-5">
                  <Clock3
                    size={28}
                    className="text-[#ff7d17] shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444]">
                    Monday to Fri: 9:am to 6pm
                  </p>
                </div>
              </div>
            </div>


{/* trust elite */}

          <div>


  


    <div className="relative z-10 ">
      <h3 className="text-[21px] font-bold text-[#f9a826] ">
        Trust Elite Certificate
      </h3>

      <Image
          src="/TRUST-ELITE.webp"
        alt="Trust Elite"
        width={120}
        height={120}
        className=""
      />

      <p className="text-black text-[15px] leading-[1.9]">
        We are proud to present the Trust Elite Certificate of
        Excellence to  Shiva Steel Fabricators, recognizing their
        commitment to exceptional customer service, outstanding
        business practices, and a dedication to building trust
        with their customers.
      </p>
    </div>
 
</div>


          </div>



      <Image width={2000} height={1000} className="w-full mb-10  absolute" src="/subscribe-area-bg.png"></Image>
          {/* Bottom Row */}
          <div className="absolute bottom-10 left-16 right-16 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-[18px] text-[#444]">
              Copyright © 2026 <span className="font-bold">    Shiva Steel Fabricators</span>
      
            </p>


       

            <div className="flex gap-2 text-[18px] text-[#444]">
           Website Designed By Inquiry Bazaar Pvt. Ltd. <a className="text-orange-600" href="https://inquirybazaar.com/">B2B Marketplace</a> 
            </div>
          </div>
        </div>
      </div>



    </footer>
  );
}