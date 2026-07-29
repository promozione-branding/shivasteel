"use client";

import React, { useState } from "react";
import Enquiry from "@/components/Enquiry";


const CityCta = ({city}) => {
        const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="w-full px-4 md:px-6 py-6 md:py-14 bg-[#1a327b] text-white">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold">
          Get Premium GI Sheets in {city}
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Looking for high-quality GI Sheets in {city}? Shiva Steel Fabricators offers
          durable GI Sheets in various sizes and specifications at competitive prices.
          Contact us today for expert assistance and a free quote for your project.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Call Button */}
          <a
            href="tel:+919873656785"
            className="bg-white text-[#1a327b] px-6 py-3 rounded-md font-semibold text-sm hover:bg-gray-200 transition"
          >
            📞 Call Now
          </a>

          {/* Quote Button */}
          <button
            onClick={() => setIsFormOpen(true)}
            className="border border-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-white hover:text-[#1a327b] transition"
          >
            Get a Free Quote
          </button>

        </div>

      </div>

       {isFormOpen && (
        <Enquiry isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      )}

    </section>
  );
};

export default CityCta;