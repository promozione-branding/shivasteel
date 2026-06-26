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
        <div className="bg-[#eef0f7] px-7  py-4 flex flex-col">
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
          <p className="mt-8 text-[15px] leading-[2] text-[#2f2e2e] ">
         We at Shiva Steel Fabricators are involved in the wholesale trade, Supplier, and provision of services for a superior quality range of products that include MS Sheet, Cable Tray, Colour, GI Decking Sheet, GP Sheet / GI Sheet, MS Pipe , MS Sheet, MS Heavy Plate, Mild Steel Chequered Plate, MS Cold Rolled Coils, MS Hot Rolled Coil, and so on.
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
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue transition"
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



     {/* About */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-6 h-[2px] bg-blue" />
                <h3 className="text-[22px] font-bold text-[#222]">
                 Quick Links
                </h3>
              </div>

              <ul className="space-y-6">
                {[
                  "About Us",
                  "Our Products",
                  "News & Events",
             
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-4 text-[18px] text-[#444] hover:text-blue"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#2b6cb0]" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            
            {/* Industry */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-6 h-[2px] bg-blue" />
                <h3 className="text-[22px] font-bold text-[#222]">
                  Our Products
                </h3>
              </div>

              <ul className="space-y-6">
                {[
                  "	GP Plain Sheet",
                  "	Mild Steel Round Pipe",
                  "	MS Sheet Plate",
                  "	Mild Steel Sheet",
                  "	Mild Steel Round Pipe",
                  "	Mild Steel Flat Bar",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="flex items-center gap-4 text-[18px] text-[#444] hover:text-blue"
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
                <span className="w-6 h-[2px] bg-blue" />
                <h3 className="text-[22px] font-bold text-[#222]">
                  Contact
                </h3>
              </div>

              <div className="space-y-0">
                <div className="flex gap-6 py-2 border-b border-[#e6e6e6]">
                  <Phone
                    size={28}
                    className="text-blue shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444]">
                 
+91-9069906984
                  </p>
                </div>

     <div className="flex gap-6 py-5 border-b border-[#e6e6e6]">
                  <Phone
                    size={28}
                    className="text-blue shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444]">
                 
+91-98736 56785

                  </p>
                </div>
                <div className="flex gap-4 py-3 border-b border-[#e6e6e6]">
                  <MapPin
                    size={28}
                    className="text-blue shrink-0 mt-1"
                  />
                  <p className="text-[16px] text-[#444] leading-8">
                X-43, Loha Mandi, Block X, Naraina Industrial Area Phase 1, Naraina, New Delhi, Delhi, 110028
                  </p>
                </div>

                <div className="flex gap-6 py-5 border-b border-[#e6e6e6]">
                  <Mail
                    size={28}
                    className="text-blue shrink-0 mt-1"
                  />
                  <p className="text-[18px] text-[#444]">
                   shivasteel2019@gmail.com
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